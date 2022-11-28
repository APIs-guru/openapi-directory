import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceleratorType
/** 
 * A accelerator type that a Node can be configured with.
**/
export class AcceleratorType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
