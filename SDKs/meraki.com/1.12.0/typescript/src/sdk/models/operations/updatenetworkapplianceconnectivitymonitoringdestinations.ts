import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations })
  destinations?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[];
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
}


export class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
