import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
/** 
 * Settings specific to keys that can be used by Android apps.
**/
export class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAllPackageNames" })
  allowAllPackageNames?: boolean;

  @Metadata({ data: "json, name=allowedPackageNames" })
  allowedPackageNames?: string[];
}
