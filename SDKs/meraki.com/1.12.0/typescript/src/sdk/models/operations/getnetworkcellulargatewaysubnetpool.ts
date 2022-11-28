import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCellularGatewaySubnetPoolPathParams;
}


export class GetNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
