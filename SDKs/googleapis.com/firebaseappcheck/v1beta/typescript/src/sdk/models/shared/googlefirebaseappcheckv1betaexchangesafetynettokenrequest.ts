import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
/** 
 * Request message for the ExchangeSafetyNetToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
