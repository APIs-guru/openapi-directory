import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";



// BatchRejectPublisherConnectionsResponse
/** 
 * A response for the request to reject a batch of publisher connections.
**/
export class BatchRejectPublisherConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherConnections", elemType: PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
