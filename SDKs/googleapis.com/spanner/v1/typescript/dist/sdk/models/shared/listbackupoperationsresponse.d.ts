import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * The response for ListBackupOperations.
**/
export declare class ListBackupOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
