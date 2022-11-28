import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest
/** 
 * Request message for the ExchangeRecaptchaEnterpriseToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recaptchaEnterpriseToken" })
  recaptchaEnterpriseToken?: string;
}
