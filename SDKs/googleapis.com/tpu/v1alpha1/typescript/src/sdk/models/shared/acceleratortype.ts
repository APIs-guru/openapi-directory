import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceleratorType
/** 
 * A accelerator type that a Node can be configured with.
**/
export class AcceleratorType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
