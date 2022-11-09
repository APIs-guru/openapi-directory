import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsScriptTypeExecutionApiConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS"
,    Myself = "MYSELF"
,    Domain = "DOMAIN"
,    Anyone = "ANYONE"
,    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}


// GoogleAppsScriptTypeExecutionApiConfig
/** 
 * API executable entry point configuration.
**/
export class GoogleAppsScriptTypeExecutionApiConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: GoogleAppsScriptTypeExecutionApiConfigAccessEnum;
}
