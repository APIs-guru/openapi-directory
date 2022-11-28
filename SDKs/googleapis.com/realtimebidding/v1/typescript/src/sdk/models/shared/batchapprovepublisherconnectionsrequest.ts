import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchApprovePublisherConnectionsRequest
/** 
 * A request to approve a batch of publisher connections.
**/
export class BatchApprovePublisherConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
