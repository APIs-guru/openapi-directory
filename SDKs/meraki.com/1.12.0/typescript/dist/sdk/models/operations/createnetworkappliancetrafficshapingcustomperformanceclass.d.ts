import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
    maxJitter?: number;
    maxLatency?: number;
    maxLossPercentage?: number;
    name: string;
}
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    pathParams: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
    request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJsonObject?: Map<string, any>;
}
