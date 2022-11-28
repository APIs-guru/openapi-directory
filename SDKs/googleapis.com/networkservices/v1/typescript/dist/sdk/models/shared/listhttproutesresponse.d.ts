import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRoute } from "./httproute";
/**
 * Response returned by the ListHttpRoutes method.
**/
export declare class ListHttpRoutesResponse extends SpeakeasyBase {
    httpRoutes?: HttpRoute[];
    nextPageToken?: string;
}
