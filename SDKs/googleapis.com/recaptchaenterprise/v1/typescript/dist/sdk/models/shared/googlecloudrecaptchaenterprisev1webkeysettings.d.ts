import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum {
    ChallengeSecurityPreferenceUnspecified = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    Usability = "USABILITY",
    Balance = "BALANCE",
    Security = "SECURITY"
}
export declare enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum {
    IntegrationTypeUnspecified = "INTEGRATION_TYPE_UNSPECIFIED",
    Score = "SCORE",
    Checkbox = "CHECKBOX",
    Invisible = "INVISIBLE"
}
/**
 * Settings specific to keys that can be used by websites.
**/
export declare class GoogleCloudRecaptchaenterpriseV1WebKeySettings extends SpeakeasyBase {
    allowAllDomains?: boolean;
    allowAmpTraffic?: boolean;
    allowedDomains?: string[];
    challengeSecurityPreference?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
    integrationType?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
}
