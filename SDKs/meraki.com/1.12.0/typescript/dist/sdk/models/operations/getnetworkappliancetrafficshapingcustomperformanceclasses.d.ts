import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJsonObject?: Map<string, any>;
}
