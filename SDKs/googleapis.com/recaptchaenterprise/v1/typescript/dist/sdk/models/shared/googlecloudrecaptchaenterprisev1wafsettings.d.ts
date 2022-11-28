import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
    WafFeatureUnspecified = "WAF_FEATURE_UNSPECIFIED",
    ChallengePage = "CHALLENGE_PAGE",
    SessionToken = "SESSION_TOKEN",
    ActionToken = "ACTION_TOKEN"
}
export declare enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum {
    WafServiceUnspecified = "WAF_SERVICE_UNSPECIFIED",
    Ca = "CA"
}
/**
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
**/
export declare class GoogleCloudRecaptchaenterpriseV1WafSettings extends SpeakeasyBase {
    wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
    wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
}
