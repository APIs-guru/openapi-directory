import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Environment } from "./googleclouddialogflowcxv3beta1environment";
/**
 * The response message for Environments.LookupEnvironmentHistory.
**/
export declare class GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowCxV3beta1Environment[];
    nextPageToken?: string;
}
