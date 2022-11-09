import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherConnection } from "./publisherconnection";


// BatchRejectPublisherConnectionsResponse
/** 
 * A response for the request to reject a batch of publisher connections.
**/
export class BatchRejectPublisherConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=publisherConnections", elemType: shared.PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
