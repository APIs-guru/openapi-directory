import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations })
  destinations?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[];
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
