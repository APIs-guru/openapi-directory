import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchRejectPublisherConnectionsRequest
/** 
 * A request to reject a batch of publisher connections.
**/
export class BatchRejectPublisherConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
