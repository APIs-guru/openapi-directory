import { SpeakeasyBase } from "../../../internal/utils";
import { MappingSettings } from "./mappingsettings";
/**
 * Settings to verify the value of JWT token fields
**/
export declare class VerificationSettings extends SpeakeasyBase {
    fields: Map<string, string>;
    mappingSettings?: MappingSettings;
}
