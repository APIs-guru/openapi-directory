import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export declare class GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig extends SpeakeasyBase {
    name?: string;
    siteKey?: string;
    tokenTtl?: string;
}
