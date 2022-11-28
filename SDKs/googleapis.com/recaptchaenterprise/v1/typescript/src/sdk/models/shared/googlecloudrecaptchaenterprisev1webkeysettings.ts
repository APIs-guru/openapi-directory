import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum {
    ChallengeSecurityPreferenceUnspecified = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    Usability = "USABILITY",
    Balance = "BALANCE",
    Security = "SECURITY"
}

export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum {
    IntegrationTypeUnspecified = "INTEGRATION_TYPE_UNSPECIFIED",
    Score = "SCORE",
    Checkbox = "CHECKBOX",
    Invisible = "INVISIBLE"
}


// GoogleCloudRecaptchaenterpriseV1WebKeySettings
/** 
 * Settings specific to keys that can be used by websites.
**/
export class GoogleCloudRecaptchaenterpriseV1WebKeySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAllDomains" })
  allowAllDomains?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowAmpTraffic" })
  allowAmpTraffic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedDomains" })
  allowedDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=challengeSecurityPreference" })
  challengeSecurityPreference?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;

  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
}
