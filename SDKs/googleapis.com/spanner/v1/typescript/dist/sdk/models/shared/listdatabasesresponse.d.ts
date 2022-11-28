import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * The response for ListDatabases.
**/
export declare class ListDatabasesResponse extends SpeakeasyBase {
    databases?: Database[];
    nextPageToken?: string;
}
