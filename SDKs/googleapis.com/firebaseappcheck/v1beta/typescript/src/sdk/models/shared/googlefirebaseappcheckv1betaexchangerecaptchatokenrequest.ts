import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest
/** 
 * Request message for the ExchangeRecaptchaToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;
}
