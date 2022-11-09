import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1IosKeySettings
/** 
 * Settings specific to keys that can be used by iOS apps.
**/
export class GoogleCloudRecaptchaenterpriseV1IosKeySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAllBundleIds" })
  allowAllBundleIds?: boolean;

  @Metadata({ data: "json, name=allowedBundleIds" })
  allowedBundleIds?: string[];
}
