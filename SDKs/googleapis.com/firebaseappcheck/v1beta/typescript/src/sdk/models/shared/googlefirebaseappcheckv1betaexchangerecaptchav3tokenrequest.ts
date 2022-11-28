import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest
/** 
 * Request message for the ExchangeRecaptchaV3Token method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recaptchaV3Token" })
  recaptchaV3Token?: string;
}
