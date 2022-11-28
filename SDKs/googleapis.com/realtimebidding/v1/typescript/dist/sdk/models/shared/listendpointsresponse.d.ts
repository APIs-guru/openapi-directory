import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * A response containing bidder endpoints.
**/
export declare class ListEndpointsResponse extends SpeakeasyBase {
    endpoints?: Endpoint[];
    nextPageToken?: string;
}
