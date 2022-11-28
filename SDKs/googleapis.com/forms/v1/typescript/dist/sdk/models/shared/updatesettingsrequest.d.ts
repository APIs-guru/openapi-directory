import { SpeakeasyBase } from "../../../internal/utils";
import { FormSettings } from "./formsettings";
/**
 * Update Form's FormSettings.
**/
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    settings?: FormSettings;
    updateMask?: string;
}
