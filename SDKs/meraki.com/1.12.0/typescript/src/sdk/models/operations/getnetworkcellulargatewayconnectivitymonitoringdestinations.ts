import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;
}


export class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
