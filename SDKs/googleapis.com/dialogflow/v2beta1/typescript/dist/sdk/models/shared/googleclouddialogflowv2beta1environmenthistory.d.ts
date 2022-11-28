import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry } from "./googleclouddialogflowv2beta1environmenthistoryentry";
/**
 * The response message for Environments.GetEnvironmentHistory.
**/
export declare class GoogleCloudDialogflowV2beta1EnvironmentHistory extends SpeakeasyBase {
    entries?: GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry[];
    nextPageToken?: string;
    parent?: string;
}
