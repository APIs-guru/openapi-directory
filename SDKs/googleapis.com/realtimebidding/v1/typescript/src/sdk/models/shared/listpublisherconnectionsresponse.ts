import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";



// ListPublisherConnectionsResponse
/** 
 * A response to a request for listing publisher connections.
**/
export class ListPublisherConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherConnections", elemType: PublisherConnection })
  publisherConnections?: PublisherConnection[];
}
