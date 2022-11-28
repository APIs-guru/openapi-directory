import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations extends SpeakeasyBase {
    default?: boolean;
    description?: string;
    ip: string;
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody extends SpeakeasyBase {
    destinations?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[];
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;
    request?: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
}
export declare class UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
