import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1RecaptchaV3Config
/** 
 * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export class GoogleFirebaseAppcheckV1RecaptchaV3Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteSecret" })
  siteSecret?: string;

  @Metadata({ data: "json, name=siteSecretSet" })
  siteSecretSet?: boolean;

  @Metadata({ data: "json, name=tokenTtl" })
  tokenTtl?: string;
}
