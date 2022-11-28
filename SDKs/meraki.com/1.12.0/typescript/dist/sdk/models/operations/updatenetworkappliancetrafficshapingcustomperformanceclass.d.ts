import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
    customPerformanceClassId: string;
    networkId: string;
}
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
    maxJitter?: number;
    maxLatency?: number;
    maxLossPercentage?: number;
    name?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
    request?: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject?: Map<string, any>;
}
