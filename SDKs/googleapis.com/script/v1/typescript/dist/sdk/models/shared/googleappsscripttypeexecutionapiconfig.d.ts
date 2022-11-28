import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsScriptTypeExecutionApiConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}
/**
 * API executable entry point configuration.
**/
export declare class GoogleAppsScriptTypeExecutionApiConfig extends SpeakeasyBase {
    access?: GoogleAppsScriptTypeExecutionApiConfigAccessEnum;
}
