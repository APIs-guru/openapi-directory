import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TensorFlowVersion
/** 
 * A tensorflow version that a Node can be configured with.
**/
export class TensorFlowVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
