import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientsApplicationUsagePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkClientsApplicationUsageQueryParams extends SpeakeasyBase {
    clients: string;
    endingBefore?: string;
    perPage?: number;
    ssidNumber?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkClientsApplicationUsageRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientsApplicationUsagePathParams;
    queryParams: GetNetworkClientsApplicationUsageQueryParams;
}
export declare class GetNetworkClientsApplicationUsageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkClientsApplicationUsage200ApplicationJsonObject?: Map<string, any>;
}
