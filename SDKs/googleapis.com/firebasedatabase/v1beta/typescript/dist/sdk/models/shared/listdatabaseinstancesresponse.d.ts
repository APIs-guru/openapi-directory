import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseInstance } from "./databaseinstance";
/**
 * The response from the ListDatabaseInstances method.
**/
export declare class ListDatabaseInstancesResponse extends SpeakeasyBase {
    instances?: DatabaseInstance[];
    nextPageToken?: string;
}
