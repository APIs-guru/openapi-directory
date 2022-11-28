import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCellularGatewayDhcpPathParams;
}


export class GetNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
