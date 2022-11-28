import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum {
    UnknownAddonType = "UNKNOWN_ADDON_TYPE",
    Gmail = "GMAIL",
    DataStudio = "DATA_STUDIO"
}
/**
 * An add-on entry point.
**/
export declare class GoogleAppsScriptTypeAddOnEntryPoint extends SpeakeasyBase {
    addOnType?: GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum;
    description?: string;
    helpUrl?: string;
    postInstallTipUrl?: string;
    reportIssueUrl?: string;
    title?: string;
}
