import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsScriptTypeExecutionApiConfigAccessEnum {
    UnknownAccess = "UNKNOWN_ACCESS",
    Myself = "MYSELF",
    Domain = "DOMAIN",
    Anyone = "ANYONE",
    AnyoneAnonymous = "ANYONE_ANONYMOUS"
}


// GoogleAppsScriptTypeExecutionApiConfig
/** 
 * API executable entry point configuration.
**/
export class GoogleAppsScriptTypeExecutionApiConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: GoogleAppsScriptTypeExecutionApiConfigAccessEnum;
}
