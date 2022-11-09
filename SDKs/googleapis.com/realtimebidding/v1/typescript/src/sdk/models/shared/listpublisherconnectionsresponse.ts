import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherConnection } from "./publisherconnection";


// ListPublisherConnectionsResponse
/** 
 * A response to a request for listing publisher connections.
**/
export class ListPublisherConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=publisherConnections", elemType: shared.PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
