import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsScriptTypeWebAppConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}
export declare enum GoogleAppsScriptTypeWebAppConfigExecuteAsEnum {
    UnknownExecuteAs = "UNKNOWN_EXECUTE_AS",
    UserAccessing = "USER_ACCESSING",
    UserDeploying = "USER_DEPLOYING"
}
/**
 * Web app entry point configuration.
**/
export declare class GoogleAppsScriptTypeWebAppConfig extends SpeakeasyBase {
    access?: GoogleAppsScriptTypeWebAppConfigAccessEnum;
    executeAs?: GoogleAppsScriptTypeWebAppConfigExecuteAsEnum;
}
