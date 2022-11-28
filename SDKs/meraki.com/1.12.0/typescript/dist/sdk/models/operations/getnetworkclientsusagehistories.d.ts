import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientsUsageHistoriesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkClientsUsageHistoriesQueryParams extends SpeakeasyBase {
    clients: string;
    endingBefore?: string;
    perPage?: number;
    ssidNumber?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkClientsUsageHistoriesRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientsUsageHistoriesPathParams;
    queryParams: GetNetworkClientsUsageHistoriesQueryParams;
}
export declare class GetNetworkClientsUsageHistoriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkClientsUsageHistories200ApplicationJsonObject?: Map<string, any>;
}
