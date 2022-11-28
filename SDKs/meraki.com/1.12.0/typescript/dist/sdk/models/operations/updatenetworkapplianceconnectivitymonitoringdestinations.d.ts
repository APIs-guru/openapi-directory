import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
    default?: boolean;
    description?: string;
    ip: string;
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
    destinations?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[];
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams;
    request?: UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
}
export declare class UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
