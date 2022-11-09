import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReimageNodeRequest
/** 
 * Request for ReimageNode.
**/
export class ReimageNodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tensorflowVersion" })
  tensorflowVersion?: string;
}
