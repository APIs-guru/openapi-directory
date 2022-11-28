import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BindDeviceToGatewayRequest
/** 
 * Request for `BindDeviceToGateway`.
**/
export class BindDeviceToGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;
}
