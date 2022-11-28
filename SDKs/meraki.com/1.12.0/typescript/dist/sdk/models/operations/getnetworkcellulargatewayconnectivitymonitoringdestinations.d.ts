import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest extends SpeakeasyBase {
    pathParams: GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;
}
export declare class GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject?: Map<string, any>;
}
