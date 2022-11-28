import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";



// BatchApprovePublisherConnectionsResponse
/** 
 * A response for the request to approve a batch of publisher connections.
**/
export class BatchApprovePublisherConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherConnections", elemType: PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
