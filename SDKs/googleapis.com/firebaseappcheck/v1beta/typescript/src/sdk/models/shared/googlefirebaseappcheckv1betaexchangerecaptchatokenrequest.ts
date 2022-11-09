import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest
/** 
 * Request message for the ExchangeRecaptchaToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;
}
