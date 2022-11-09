import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsScriptTypeWebAppConfig } from "./googleappsscripttypewebappconfig";


// GoogleAppsScriptTypeWebAppEntryPoint
/** 
 * A web application entry point.
**/
export class GoogleAppsScriptTypeWebAppEntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryPointConfig" })
  entryPointConfig?: GoogleAppsScriptTypeWebAppConfig;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
