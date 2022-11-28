import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AndroidKeySettings } from "./googlecloudrecaptchaenterprisev1androidkeysettings";
import { GoogleCloudRecaptchaenterpriseV1IosKeySettings } from "./googlecloudrecaptchaenterprisev1ioskeysettings";
import { GoogleCloudRecaptchaenterpriseV1TestingOptions } from "./googlecloudrecaptchaenterprisev1testingoptions";
import { GoogleCloudRecaptchaenterpriseV1WafSettings } from "./googlecloudrecaptchaenterprisev1wafsettings";
import { GoogleCloudRecaptchaenterpriseV1WebKeySettings } from "./googlecloudrecaptchaenterprisev1webkeysettings";



// GoogleCloudRecaptchaenterpriseV1Key
/** 
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
**/
export class GoogleCloudRecaptchaenterpriseV1Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidSettings" })
  androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iosSettings" })
  iosSettings?: GoogleCloudRecaptchaenterpriseV1IosKeySettings;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testingOptions" })
  testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;

  @SpeakeasyMetadata({ data: "json, name=wafSettings" })
  wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;

  @SpeakeasyMetadata({ data: "json, name=webSettings" })
  webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}
