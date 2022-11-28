import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsScriptTypeWebAppConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}

export enum GoogleAppsScriptTypeWebAppConfigExecuteAsEnum {
    UnknownExecuteAs = "UNKNOWN_EXECUTE_AS",
    UserAccessing = "USER_ACCESSING",
    UserDeploying = "USER_DEPLOYING"
}


// GoogleAppsScriptTypeWebAppConfig
/** 
 * Web app entry point configuration.
**/
export class GoogleAppsScriptTypeWebAppConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleAppsScriptTypeWebAppConfigAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=executeAs" })
  executeAs?: GoogleAppsScriptTypeWebAppConfigExecuteAsEnum;
}
