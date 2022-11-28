import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPiiSmDevicesForKeyPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPiiSmDevicesForKeyQueryParams extends SpeakeasyBase {
    bluetoothMac?: string;
    email?: string;
    imei?: string;
    mac?: string;
    serial?: string;
    username?: string;
}
export declare class GetNetworkPiiSmDevicesForKeyRequest extends SpeakeasyBase {
    pathParams: GetNetworkPiiSmDevicesForKeyPathParams;
    queryParams: GetNetworkPiiSmDevicesForKeyQueryParams;
}
export declare class GetNetworkPiiSmDevicesForKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkPiiSmDevicesForKey200ApplicationJsonObject?: Map<string, any>;
}
