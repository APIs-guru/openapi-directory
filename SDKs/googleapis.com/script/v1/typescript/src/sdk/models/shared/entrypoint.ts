import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsScriptTypeAddOnEntryPoint } from "./googleappsscripttypeaddonentrypoint";
import { GoogleAppsScriptTypeExecutionApiEntryPoint } from "./googleappsscripttypeexecutionapientrypoint";
import { GoogleAppsScriptTypeWebAppEntryPoint } from "./googleappsscripttypewebappentrypoint";

export enum EntryPointEntryPointTypeEnum {
    EntryPointTypeUnspecified = "ENTRY_POINT_TYPE_UNSPECIFIED"
,    WebApp = "WEB_APP"
,    ExecutionApi = "EXECUTION_API"
,    AddOn = "ADD_ON"
}


// EntryPoint
/** 
 * A configuration that defines how a deployment is accessed externally.
**/
export class EntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOn" })
  addOn?: GoogleAppsScriptTypeAddOnEntryPoint;

  @Metadata({ data: "json, name=entryPointType" })
  entryPointType?: EntryPointEntryPointTypeEnum;

  @Metadata({ data: "json, name=executionApi" })
  executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint;

  @Metadata({ data: "json, name=webApp" })
  webApp?: GoogleAppsScriptTypeWebAppEntryPoint;
}
