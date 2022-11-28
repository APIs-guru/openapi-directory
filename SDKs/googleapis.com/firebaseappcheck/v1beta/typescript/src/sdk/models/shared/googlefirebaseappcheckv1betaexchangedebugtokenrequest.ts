import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest
/** 
 * Request message for the ExchangeDebugToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugToken" })
  debugToken?: string;
}
