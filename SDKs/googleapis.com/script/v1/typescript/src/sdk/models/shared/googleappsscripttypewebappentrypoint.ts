import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeWebAppConfig } from "./googleappsscripttypewebappconfig";



// GoogleAppsScriptTypeWebAppEntryPoint
/** 
 * A web application entry point.
**/
export class GoogleAppsScriptTypeWebAppEntryPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryPointConfig" })
  entryPointConfig?: GoogleAppsScriptTypeWebAppConfig;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
