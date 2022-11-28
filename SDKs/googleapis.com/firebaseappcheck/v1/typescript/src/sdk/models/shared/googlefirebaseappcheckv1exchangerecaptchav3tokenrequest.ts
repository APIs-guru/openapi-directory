import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest
/** 
 * Request message for the ExchangeRecaptchaV3Token method.
**/
export class GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recaptchaV3Token" })
  recaptchaV3Token?: string;
}
