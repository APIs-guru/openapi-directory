import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessMeshStatusesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessMeshStatusesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkWirelessMeshStatusesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessMeshStatusesPathParams;
    queryParams: GetNetworkWirelessMeshStatusesQueryParams;
}
export declare class GetNetworkWirelessMeshStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkWirelessMeshStatuses200ApplicationJsonObject?: Map<string, any>;
}
