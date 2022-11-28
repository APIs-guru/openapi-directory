import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * The response message for Operations.ListOperations.
**/
export declare class ListOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
