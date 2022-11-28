import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations })
  destinations?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[];
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
