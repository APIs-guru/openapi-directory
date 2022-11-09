import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BindDeviceToGatewayRequest
/** 
 * Request for `BindDeviceToGateway`.
**/
export class BindDeviceToGatewayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId?: string;
}
