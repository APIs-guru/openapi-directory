import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * Route list response.
**/
export declare class ListRoutesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    routes?: Route[];
    unreachable?: string[];
}
