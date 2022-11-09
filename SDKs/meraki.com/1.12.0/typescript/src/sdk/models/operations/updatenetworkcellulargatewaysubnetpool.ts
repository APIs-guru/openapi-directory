import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewaySubnetPoolRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=mask" })
  mask?: number;
}


export class UpdateNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCellularGatewaySubnetPoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewaySubnetPoolRequestBody;
}


export class UpdateNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
