import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TensorFlowVersion
/** 
 * A tensorflow version that a Node can be configured with.
**/
export class TensorFlowVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
