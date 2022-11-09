import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsScriptTypeWebAppConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS"
,    Myself = "MYSELF"
,    Domain = "DOMAIN"
,    Anyone = "ANYONE"
,    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}

export enum GoogleAppsScriptTypeWebAppConfigExecuteAsEnum {
    UnknownExecuteAs = "UNKNOWN_EXECUTE_AS"
,    UserAccessing = "USER_ACCESSING"
,    UserDeploying = "USER_DEPLOYING"
}


// GoogleAppsScriptTypeWebAppConfig
/** 
 * Web app entry point configuration.
**/
export class GoogleAppsScriptTypeWebAppConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleAppsScriptTypeWebAppConfigAccessEnum;

  @Metadata({ data: "json, name=executeAs" })
  executeAs?: GoogleAppsScriptTypeWebAppConfigExecuteAsEnum;
}
