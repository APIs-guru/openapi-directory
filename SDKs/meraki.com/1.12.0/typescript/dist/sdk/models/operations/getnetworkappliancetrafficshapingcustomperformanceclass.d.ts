import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
    customPerformanceClassId: string;
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject?: Map<string, any>;
}
