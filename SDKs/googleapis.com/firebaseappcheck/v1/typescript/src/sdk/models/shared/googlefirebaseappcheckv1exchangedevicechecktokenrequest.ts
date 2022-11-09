import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest
/** 
 * Request message for the ExchangeDeviceCheckToken method.
**/
export class GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceToken" })
  deviceToken?: string;
}
