import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
export declare enum TagConsentSettingConsentStatusEnum {
    NotSet = "notSet",
    NotNeeded = "notNeeded",
    Needed = "needed"
}
export declare class TagConsentSetting extends SpeakeasyBase {
    consentStatus?: TagConsentSettingConsentStatusEnum;
    consentType?: Parameter;
}
