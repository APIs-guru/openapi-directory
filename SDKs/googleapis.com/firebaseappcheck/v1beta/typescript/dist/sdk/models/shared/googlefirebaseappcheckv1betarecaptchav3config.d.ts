import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
export declare class GoogleFirebaseAppcheckV1betaRecaptchaV3Config extends SpeakeasyBase {
    name?: string;
    siteSecret?: string;
    siteSecretSet?: boolean;
    tokenTtl?: string;
}
