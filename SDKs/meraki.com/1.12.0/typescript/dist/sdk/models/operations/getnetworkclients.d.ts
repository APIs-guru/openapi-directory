import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkClientsRecentDeviceConnectionsEnum {
    Wired = "Wired",
    Wireless = "Wireless"
}
export declare enum GetNetworkClientsStatusesEnum {
    Online = "Online",
    Offline = "Offline"
}
export declare class GetNetworkClientsQueryParams extends SpeakeasyBase {
    description?: string;
    endingBefore?: string;
    ip?: string;
    ip6?: string;
    ip6Local?: string;
    mac?: string;
    os?: string;
    perPage?: number;
    recentDeviceConnections?: GetNetworkClientsRecentDeviceConnectionsEnum[];
    startingAfter?: string;
    statuses?: GetNetworkClientsStatusesEnum[];
    t0?: string;
    timespan?: number;
}
export declare class GetNetworkClientsRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientsPathParams;
    queryParams: GetNetworkClientsQueryParams;
}
export declare class GetNetworkClientsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkClients200ApplicationJsonObject?: Map<string, any>;
}
