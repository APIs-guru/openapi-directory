import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewaySubnetPoolRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=mask" })
  mask?: number;
}


export class UpdateNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCellularGatewaySubnetPoolPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewaySubnetPoolRequestBody;
}


export class UpdateNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
