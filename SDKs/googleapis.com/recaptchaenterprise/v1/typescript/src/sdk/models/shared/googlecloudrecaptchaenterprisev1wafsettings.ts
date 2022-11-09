import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
    WafFeatureUnspecified = "WAF_FEATURE_UNSPECIFIED"
,    ChallengePage = "CHALLENGE_PAGE"
,    SessionToken = "SESSION_TOKEN"
,    ActionToken = "ACTION_TOKEN"
}

export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum {
    WafServiceUnspecified = "WAF_SERVICE_UNSPECIFIED"
,    Ca = "CA"
}


// GoogleCloudRecaptchaenterpriseV1WafSettings
/** 
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
**/
export class GoogleCloudRecaptchaenterpriseV1WafSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=wafFeature" })
  wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;

  @Metadata({ data: "json, name=wafService" })
  wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
}
