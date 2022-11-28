import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AndroidKeySettings } from "./googlecloudrecaptchaenterprisev1androidkeysettings";
import { GoogleCloudRecaptchaenterpriseV1IosKeySettings } from "./googlecloudrecaptchaenterprisev1ioskeysettings";
import { GoogleCloudRecaptchaenterpriseV1TestingOptions } from "./googlecloudrecaptchaenterprisev1testingoptions";
import { GoogleCloudRecaptchaenterpriseV1WafSettings } from "./googlecloudrecaptchaenterprisev1wafsettings";
import { GoogleCloudRecaptchaenterpriseV1WebKeySettings } from "./googlecloudrecaptchaenterprisev1webkeysettings";
/**
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
**/
export declare class GoogleCloudRecaptchaenterpriseV1Key extends SpeakeasyBase {
    androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
    createTime?: string;
    displayName?: string;
    iosSettings?: GoogleCloudRecaptchaenterpriseV1IosKeySettings;
    labels?: Map<string, string>;
    name?: string;
    testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;
    wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;
    webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}
