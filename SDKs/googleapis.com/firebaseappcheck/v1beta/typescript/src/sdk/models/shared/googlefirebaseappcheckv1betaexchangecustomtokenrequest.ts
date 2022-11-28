import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest
/** 
 * Request message for the ExchangeCustomToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customToken" })
  customToken?: string;
}
