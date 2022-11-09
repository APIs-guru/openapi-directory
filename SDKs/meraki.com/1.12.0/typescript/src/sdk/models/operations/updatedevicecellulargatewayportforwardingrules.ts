import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: string;

  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @Metadata({ data: "json, name=lanIp" })
  lanIp: string;

  @Metadata({ data: "json, name=localPort" })
  localPort: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: string;

  @Metadata({ data: "json, name=publicPort" })
  publicPort: string;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules })
  rules?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[];
}


export class UpdateDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCellularGatewayPortForwardingRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
}


export class UpdateDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
