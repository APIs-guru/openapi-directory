import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceUplinksUsageHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceUplinksUsageHistoryQueryParams extends SpeakeasyBase {
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkApplianceUplinksUsageHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceUplinksUsageHistoryPathParams;
    queryParams: GetNetworkApplianceUplinksUsageHistoryQueryParams;
}
export declare class GetNetworkApplianceUplinksUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceUplinksUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
