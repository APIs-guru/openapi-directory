import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkBluetoothClientsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkBluetoothClientsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    includeConnectivityHistory?: boolean;
    perPage?: number;
    startingAfter?: string;
    t0?: string;
    timespan?: number;
}
export declare class GetNetworkBluetoothClientsRequest extends SpeakeasyBase {
    pathParams: GetNetworkBluetoothClientsPathParams;
    queryParams: GetNetworkBluetoothClientsQueryParams;
}
export declare class GetNetworkBluetoothClientsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkBluetoothClients200ApplicationJsonObject?: Map<string, any>;
}
