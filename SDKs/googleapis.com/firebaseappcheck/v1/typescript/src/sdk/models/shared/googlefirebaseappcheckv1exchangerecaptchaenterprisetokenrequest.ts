import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest
/** 
 * Request message for the ExchangeRecaptchaEnterpriseToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recaptchaEnterpriseToken" })
  recaptchaEnterpriseToken?: string;
}
