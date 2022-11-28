import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficAnalysisRequest extends SpeakeasyBase {
    pathParams: GetNetworkTrafficAnalysisPathParams;
}
export declare class GetNetworkTrafficAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
