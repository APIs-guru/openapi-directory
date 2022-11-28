import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCellularGatewayPortForwardingRulesPathParams;
}


export class GetDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
