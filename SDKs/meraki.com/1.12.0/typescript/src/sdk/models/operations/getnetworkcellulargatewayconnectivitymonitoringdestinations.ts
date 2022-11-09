import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;
}


export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
