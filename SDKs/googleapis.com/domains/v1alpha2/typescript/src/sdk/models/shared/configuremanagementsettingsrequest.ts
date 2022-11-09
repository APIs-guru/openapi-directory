import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagementSettings } from "./managementsettings";


// ConfigureManagementSettingsRequest
/** 
 * Request for the `ConfigureManagementSettings` method.
**/
export class ConfigureManagementSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=managementSettings" })
  managementSettings?: ManagementSettings;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
