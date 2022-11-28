import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleLongrunningOperation } from "./googlelongrunningoperation";
/**
 * The response message for Operations.ListOperations.
**/
export declare class GoogleLongrunningListOperationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: GoogleLongrunningOperation[];
}
