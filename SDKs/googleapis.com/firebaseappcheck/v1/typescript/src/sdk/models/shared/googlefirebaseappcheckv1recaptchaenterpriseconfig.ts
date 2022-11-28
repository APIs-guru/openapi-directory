import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig
/** 
 * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export class GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteKey" })
  siteKey?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenTtl" })
  tokenTtl?: string;
}
