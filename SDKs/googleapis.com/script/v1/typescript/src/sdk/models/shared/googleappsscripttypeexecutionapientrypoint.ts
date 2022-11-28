import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeExecutionApiConfig } from "./googleappsscripttypeexecutionapiconfig";



// GoogleAppsScriptTypeExecutionApiEntryPoint
/** 
 * An API executable entry point.
**/
export class GoogleAppsScriptTypeExecutionApiEntryPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryPointConfig" })
  entryPointConfig?: GoogleAppsScriptTypeExecutionApiConfig;
}
