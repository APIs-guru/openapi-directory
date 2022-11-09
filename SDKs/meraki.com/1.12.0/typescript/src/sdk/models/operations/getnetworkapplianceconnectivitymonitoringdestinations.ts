import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceConnectivityMonitoringDestinationsPathParams;
}


export class GetNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
