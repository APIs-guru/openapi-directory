import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchApprovePublisherConnectionsRequest
/** 
 * A request to approve a batch of publisher connections.
**/
export class BatchApprovePublisherConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
