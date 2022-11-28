import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaRecaptchaV3Config
/** 
 * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export class GoogleFirebaseAppcheckV1betaRecaptchaV3Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSecret" })
  siteSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=siteSecretSet" })
  siteSecretSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tokenTtl" })
  tokenTtl?: string;
}
