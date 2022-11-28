import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCellularGatewayUplinkPathParams;
}


export class GetNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCellularGatewayUplink200ApplicationJsonObject?: Map<string, any>;
}
