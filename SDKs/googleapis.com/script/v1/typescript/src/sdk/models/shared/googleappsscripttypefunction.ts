import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsScriptTypeFunction
/** 
 * Represents a function in a script project.
**/
export class GoogleAppsScriptTypeFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: string[];
}
