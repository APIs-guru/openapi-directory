import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig
/** 
 * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export class GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteKey" })
  siteKey?: string;

  @Metadata({ data: "json, name=tokenTtl" })
  tokenTtl?: string;
}
