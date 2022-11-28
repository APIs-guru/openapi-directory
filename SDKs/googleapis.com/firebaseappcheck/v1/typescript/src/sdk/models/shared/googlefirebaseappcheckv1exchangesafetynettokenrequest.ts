import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest
/** 
 * Request message for the ExchangeSafetyNetToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
