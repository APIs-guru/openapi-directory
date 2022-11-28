import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest
/** 
 * Request message for the ExchangeDebugToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugToken" })
  debugToken?: string;
}
