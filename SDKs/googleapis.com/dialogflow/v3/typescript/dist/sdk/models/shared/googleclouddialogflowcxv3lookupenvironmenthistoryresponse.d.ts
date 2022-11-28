import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";
/**
 * The response message for Environments.LookupEnvironmentHistory.
**/
export declare class GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowCxV3Environment[];
    nextPageToken?: string;
}
