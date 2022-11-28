import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest
/** 
 * Request message for the ExchangeDeviceCheckToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceToken" })
  deviceToken?: string;
}
