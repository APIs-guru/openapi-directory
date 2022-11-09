import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccount } from "./serviceaccount";
/**
 * The service account list response.
**/
export declare class ListServiceAccountsResponse extends SpeakeasyBase {
    accounts?: ServiceAccount[];
    nextPageToken?: string;
}
