import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * The response for ListDatabaseOperations.
**/
export declare class ListDatabaseOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
