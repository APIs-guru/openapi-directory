import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum {
    RestoreOptionUnspecified = "RESTORE_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Fallback = "FALLBACK"
}
/**
 * The request message for Agents.RestoreAgent.
**/
export declare class GoogleCloudDialogflowCxV3RestoreAgentRequest extends SpeakeasyBase {
    agentContent?: string;
    agentUri?: string;
    restoreOption?: GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum;
}
