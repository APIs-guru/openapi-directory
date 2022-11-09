import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest
/** 
 * Request message for the ExchangeDeviceCheckToken method.
**/
export class GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceToken" })
  deviceToken?: string;
}
