import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkBluetoothClientPathParams extends SpeakeasyBase {
    bluetoothClientId: string;
    networkId: string;
}
export declare class GetNetworkBluetoothClientQueryParams extends SpeakeasyBase {
    connectivityHistoryTimespan?: number;
    includeConnectivityHistory?: boolean;
}
export declare class GetNetworkBluetoothClientRequest extends SpeakeasyBase {
    pathParams: GetNetworkBluetoothClientPathParams;
    queryParams: GetNetworkBluetoothClientQueryParams;
}
export declare class GetNetworkBluetoothClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkBluetoothClient200ApplicationJsonObject?: Map<string, any>;
}
