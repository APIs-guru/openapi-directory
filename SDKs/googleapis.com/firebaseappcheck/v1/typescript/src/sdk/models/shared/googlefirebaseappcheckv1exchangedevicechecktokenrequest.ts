import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest
/** 
 * Request message for the ExchangeDeviceCheckToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceToken" })
  deviceToken?: string;
}
