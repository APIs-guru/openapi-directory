import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RestrictionChange } from "./restrictionchange";


// SettingsChange
/** 
 * Information about settings changes.
**/
export class SettingsChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=restrictionChanges", elemType: shared.RestrictionChange })
  restrictionChanges?: RestrictionChange[];
}
