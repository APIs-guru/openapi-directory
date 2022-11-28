import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkTrafficAnalysisPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum {
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}
export declare class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems extends SpeakeasyBase {
    name: string;
    type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
    value: string;
}
export declare enum UpdateNetworkTrafficAnalysisRequestBodyModeEnum {
    Disabled = "disabled",
    Basic = "basic",
    Detailed = "detailed"
}
export declare class UpdateNetworkTrafficAnalysisRequestBody extends SpeakeasyBase {
    customPieChartItems?: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[];
    mode?: UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
}
export declare class UpdateNetworkTrafficAnalysisRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkTrafficAnalysisPathParams;
    request?: UpdateNetworkTrafficAnalysisRequestBody;
}
export declare class UpdateNetworkTrafficAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkTrafficAnalysis200ApplicationJsonObject?: Map<string, any>;
}
