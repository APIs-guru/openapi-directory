import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestrictionChange } from "./restrictionchange";



// SettingsChange
/** 
 * Information about settings changes.
**/
export class SettingsChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restrictionChanges", elemType: RestrictionChange })
  restrictionChanges?: RestrictionChange[];
}
