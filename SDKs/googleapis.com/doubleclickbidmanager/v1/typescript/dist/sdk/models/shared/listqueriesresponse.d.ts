import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * List queries response.
**/
export declare class ListQueriesResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    queries?: Query[];
}
