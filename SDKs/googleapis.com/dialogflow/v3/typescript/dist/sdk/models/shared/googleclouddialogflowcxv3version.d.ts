import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";
export declare enum GoogleCloudDialogflowCxV3VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Represents a version of a flow.
**/
export declare class GoogleCloudDialogflowCxV3Version extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
    state?: GoogleCloudDialogflowCxV3VersionStateEnum;
}
/**
 * Represents a version of a flow.
**/
export declare class GoogleCloudDialogflowCxV3VersionInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3NluSettings;
}
