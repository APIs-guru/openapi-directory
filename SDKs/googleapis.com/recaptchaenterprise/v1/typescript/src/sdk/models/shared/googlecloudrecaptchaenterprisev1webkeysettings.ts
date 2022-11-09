import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum {
    ChallengeSecurityPreferenceUnspecified = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED"
,    Usability = "USABILITY"
,    Balance = "BALANCE"
,    Security = "SECURITY"
}

export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum {
    IntegrationTypeUnspecified = "INTEGRATION_TYPE_UNSPECIFIED"
,    Score = "SCORE"
,    Checkbox = "CHECKBOX"
,    Invisible = "INVISIBLE"
}


// GoogleCloudRecaptchaenterpriseV1WebKeySettings
/** 
 * Settings specific to keys that can be used by websites.
**/
export class GoogleCloudRecaptchaenterpriseV1WebKeySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAllDomains" })
  allowAllDomains?: boolean;

  @Metadata({ data: "json, name=allowAmpTraffic" })
  allowAmpTraffic?: boolean;

  @Metadata({ data: "json, name=allowedDomains" })
  allowedDomains?: string[];

  @Metadata({ data: "json, name=challengeSecurityPreference" })
  challengeSecurityPreference?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;

  @Metadata({ data: "json, name=integrationType" })
  integrationType?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
}
