import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCellularGatewayDhcpPathParams;
}


export class GetNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
