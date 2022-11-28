import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
    WafFeatureUnspecified = "WAF_FEATURE_UNSPECIFIED",
    ChallengePage = "CHALLENGE_PAGE",
    SessionToken = "SESSION_TOKEN",
    ActionToken = "ACTION_TOKEN"
}

export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum {
    WafServiceUnspecified = "WAF_SERVICE_UNSPECIFIED",
    Ca = "CA"
}


// GoogleCloudRecaptchaenterpriseV1WafSettings
/** 
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
**/
export class GoogleCloudRecaptchaenterpriseV1WafSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wafFeature" })
  wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;

  @SpeakeasyMetadata({ data: "json, name=wafService" })
  wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
}
