import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsScriptTypeFunction
/** 
 * Represents a function in a script project.
**/
export class GoogleAppsScriptTypeFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: string[];
}
