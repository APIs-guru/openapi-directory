import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnbindDeviceFromGatewayRequest
/** 
 * Request for `UnbindDeviceFromGateway`.
**/
export class UnbindDeviceFromGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;
}
