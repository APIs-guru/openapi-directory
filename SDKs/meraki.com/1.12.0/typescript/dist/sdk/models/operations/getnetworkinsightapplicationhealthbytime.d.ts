import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkInsightApplicationHealthByTimePathParams extends SpeakeasyBase {
    applicationId: string;
    networkId: string;
}
export declare class GetNetworkInsightApplicationHealthByTimeQueryParams extends SpeakeasyBase {
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkInsightApplicationHealthByTimeRequest extends SpeakeasyBase {
    pathParams: GetNetworkInsightApplicationHealthByTimePathParams;
    queryParams: GetNetworkInsightApplicationHealthByTimeQueryParams;
}
export declare class GetNetworkInsightApplicationHealthByTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkInsightApplicationHealthByTime200ApplicationJsonObject?: Map<string, any>;
}
