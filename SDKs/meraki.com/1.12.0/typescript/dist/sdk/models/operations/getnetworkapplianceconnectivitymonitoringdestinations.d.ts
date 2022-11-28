import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceConnectivityMonitoringDestinationsPathParams;
}
export declare class GetNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
