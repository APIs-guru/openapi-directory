import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EnvironmentHistoryEntry } from "./googleclouddialogflowv2environmenthistoryentry";
/**
 * The response message for Environments.GetEnvironmentHistory.
**/
export declare class GoogleCloudDialogflowV2EnvironmentHistory extends SpeakeasyBase {
    entries?: GoogleCloudDialogflowV2EnvironmentHistoryEntry[];
    nextPageToken?: string;
    parent?: string;
}
