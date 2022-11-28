import { SpeakeasyBase } from "../../../internal/utils";
import { ManagementSettingsInput } from "./managementsettings";
/**
 * Request for the `ConfigureManagementSettings` method.
**/
export declare class ConfigureManagementSettingsRequestInput extends SpeakeasyBase {
    managementSettings?: ManagementSettingsInput;
    updateMask?: string;
}
