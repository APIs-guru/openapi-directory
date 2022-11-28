import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";
/**
 * A response to a request for listing publisher connections.
**/
export declare class ListPublisherConnectionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    publisherConnections?: PublisherConnection[];
}
