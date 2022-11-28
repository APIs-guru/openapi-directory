import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
/** 
 * Settings specific to keys that can be used by Android apps.
**/
export class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAllPackageNames" })
  allowAllPackageNames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedPackageNames" })
  allowedPackageNames?: string[];
}
