import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPiiSmOwnersForKeyPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPiiSmOwnersForKeyQueryParams extends SpeakeasyBase {
    bluetoothMac?: string;
    email?: string;
    imei?: string;
    mac?: string;
    serial?: string;
    username?: string;
}
export declare class GetNetworkPiiSmOwnersForKeyRequest extends SpeakeasyBase {
    pathParams: GetNetworkPiiSmOwnersForKeyPathParams;
    queryParams: GetNetworkPiiSmOwnersForKeyQueryParams;
}
export declare class GetNetworkPiiSmOwnersForKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkPiiSmOwnersForKey200ApplicationJsonObject?: Map<string, any>;
}
