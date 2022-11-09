import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnbindDeviceFromGatewayRequest
/** 
 * Request for `UnbindDeviceFromGateway`.
**/
export class UnbindDeviceFromGatewayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId?: string;
}
