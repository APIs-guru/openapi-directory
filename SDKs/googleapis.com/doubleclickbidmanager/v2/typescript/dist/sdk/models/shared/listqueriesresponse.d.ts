import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
export declare class ListQueriesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    queries?: Query[];
}
