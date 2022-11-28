import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeFunction } from "./googleappsscripttypefunction";



// GoogleAppsScriptTypeFunctionSet
/** 
 * A set of functions. No duplicates are permitted.
**/
export class GoogleAppsScriptTypeFunctionSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleAppsScriptTypeFunction })
  values?: GoogleAppsScriptTypeFunction[];
}
