import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest
/** 
 * Request message for the ExchangeCustomToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customToken" })
  customToken?: string;
}
