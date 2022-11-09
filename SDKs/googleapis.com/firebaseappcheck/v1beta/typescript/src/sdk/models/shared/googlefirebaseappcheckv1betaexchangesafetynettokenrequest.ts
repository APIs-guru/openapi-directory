import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
/** 
 * Request message for the ExchangeSafetyNetToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
