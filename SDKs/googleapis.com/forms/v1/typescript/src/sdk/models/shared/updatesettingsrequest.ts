import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormSettings } from "./formsettings";



// UpdateSettingsRequest
/** 
 * Update Form's FormSettings.
**/
export class UpdateSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: FormSettings;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
