import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1IosKeySettings
/** 
 * Settings specific to keys that can be used by iOS apps.
**/
export class GoogleCloudRecaptchaenterpriseV1IosKeySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAllBundleIds" })
  allowAllBundleIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedBundleIds" })
  allowedBundleIds?: string[];
}
