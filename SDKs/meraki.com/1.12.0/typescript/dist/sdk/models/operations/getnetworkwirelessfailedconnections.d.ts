import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessFailedConnectionsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessFailedConnectionsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessFailedConnectionsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessFailedConnectionsBandEnum;
    clientId?: string;
    serial?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessFailedConnectionsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessFailedConnectionsPathParams;
    queryParams: GetNetworkWirelessFailedConnectionsQueryParams;
}
export declare class GetNetworkWirelessFailedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessFailedConnections200ApplicationJsonObject?: Map<string, any>;
}
