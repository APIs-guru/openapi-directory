import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCellularGatewayPortForwardingRulesPathParams;
}


export class GetDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
