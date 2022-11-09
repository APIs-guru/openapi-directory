import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCellularGatewaySubnetPoolPathParams;
}


export class GetNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
