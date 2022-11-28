import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * The response for ListInstanceConfigOperations.
**/
export declare class ListInstanceConfigOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
