import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";
export declare enum GoogleCloudDialogflowCxV3beta1VersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Represents a version of a flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1VersionInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
}
/**
 * Represents a version of a flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1Version extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    name?: string;
    nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;
    state?: GoogleCloudDialogflowCxV3beta1VersionStateEnum;
}
