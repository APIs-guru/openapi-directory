import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=androidSettings" })
  androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iosSettings" })
  iosSettings?: GoogleCloudRecaptchaenterpriseV1IosKeySettings;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testingOptions" })
  testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;

  @Metadata({ data: "json, name=wafSettings" })
  wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;

  @Metadata({ data: "json, name=webSettings" })
  webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}
