import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations })
  destinations?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[];
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
}


export class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
