import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherConnection } from "./publisherconnection";


// BatchApprovePublisherConnectionsResponse
/** 
 * A response for the request to approve a batch of publisher connections.
**/
export class BatchApprovePublisherConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=publisherConnections", elemType: shared.PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
