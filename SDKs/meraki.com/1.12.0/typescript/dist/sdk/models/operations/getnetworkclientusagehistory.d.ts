import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientUsageHistoryPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientUsageHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientUsageHistoryPathParams;
}
export declare class GetNetworkClientUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkClientUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
