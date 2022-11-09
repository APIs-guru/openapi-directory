import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsScriptTypeExecutionApiConfig } from "./googleappsscripttypeexecutionapiconfig";


// GoogleAppsScriptTypeExecutionApiEntryPoint
/** 
 * An API executable entry point.
**/
export class GoogleAppsScriptTypeExecutionApiEntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryPointConfig" })
  entryPointConfig?: GoogleAppsScriptTypeExecutionApiConfig;
}
