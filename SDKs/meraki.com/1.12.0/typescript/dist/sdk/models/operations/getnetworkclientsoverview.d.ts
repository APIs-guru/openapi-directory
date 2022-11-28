import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientsOverviewPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkClientsOverviewQueryParams extends SpeakeasyBase {
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkClientsOverviewRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientsOverviewPathParams;
    queryParams: GetNetworkClientsOverviewQueryParams;
}
export declare class GetNetworkClientsOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkClientsOverview200ApplicationJsonObject?: Map<string, any>;
}
