import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormSettings } from "./formsettings";


// UpdateSettingsRequest
/** 
 * Update Form's FormSettings.
**/
export class UpdateSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: FormSettings;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
