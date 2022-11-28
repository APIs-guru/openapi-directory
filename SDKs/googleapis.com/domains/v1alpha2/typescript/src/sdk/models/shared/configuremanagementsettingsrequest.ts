import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagementSettingsInput } from "./managementsettings";



// ConfigureManagementSettingsRequestInput
/** 
 * Request for the `ConfigureManagementSettings` method.
**/
export class ConfigureManagementSettingsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managementSettings" })
  managementSettings?: ManagementSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
