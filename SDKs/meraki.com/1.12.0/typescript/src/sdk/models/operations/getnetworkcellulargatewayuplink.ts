import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCellularGatewayUplinkPathParams;
}


export class GetNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCellularGatewayUplink200ApplicationJsonObject?: Map<string, any>;
}
