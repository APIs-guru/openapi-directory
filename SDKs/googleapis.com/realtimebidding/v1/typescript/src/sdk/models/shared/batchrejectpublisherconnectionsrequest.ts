import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchRejectPublisherConnectionsRequest
/** 
 * A request to reject a batch of publisher connections.
**/
export class BatchRejectPublisherConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
