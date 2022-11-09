import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
/** 
 * Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
**/
export class GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacySecretKey" })
  legacySecretKey?: string;
}
