import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * route list response
**/
export declare class ListRoutesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    routes?: Route[];
    unreachable?: string[];
}
