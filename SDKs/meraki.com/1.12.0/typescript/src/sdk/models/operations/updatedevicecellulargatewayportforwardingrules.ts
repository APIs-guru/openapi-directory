import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: string;

  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=lanIp" })
  lanIp: string;

  @SpeakeasyMetadata({ data: "json, name=localPort" })
  localPort: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: string;

  @SpeakeasyMetadata({ data: "json, name=publicPort" })
  publicPort: string;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules })
  rules?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[];
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCellularGatewayPortForwardingRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
