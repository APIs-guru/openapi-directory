import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsScriptTypeFunction } from "./googleappsscripttypefunction";


// GoogleAppsScriptTypeFunctionSet
/** 
 * A set of functions. No duplicates are permitted.
**/
export class GoogleAppsScriptTypeFunctionSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.GoogleAppsScriptTypeFunction })
  values?: GoogleAppsScriptTypeFunction[];
}
