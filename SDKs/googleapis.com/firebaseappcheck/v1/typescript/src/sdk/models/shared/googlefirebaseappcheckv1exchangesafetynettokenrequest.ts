import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest
/** 
 * Request message for the ExchangeSafetyNetToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
