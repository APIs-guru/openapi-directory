import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest
/** 
 * Request message for the ExchangeCustomToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customToken" })
  customToken?: string;
}
