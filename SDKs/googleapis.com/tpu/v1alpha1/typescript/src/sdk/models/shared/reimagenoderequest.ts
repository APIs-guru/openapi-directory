import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReimageNodeRequest
/** 
 * Request for ReimageNode.
**/
export class ReimageNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tensorflowVersion" })
  tensorflowVersion?: string;
}
