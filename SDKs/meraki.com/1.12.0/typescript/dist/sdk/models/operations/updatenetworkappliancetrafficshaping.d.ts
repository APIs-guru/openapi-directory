import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceTrafficShapingPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * Global per-client bandwidth limit
**/
export declare class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
export declare class UpdateNetworkApplianceTrafficShapingRequestBody extends SpeakeasyBase {
    globalBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
}
export declare class UpdateNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceTrafficShapingPathParams;
    request?: UpdateNetworkApplianceTrafficShapingRequestBody;
}
export declare class UpdateNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceTrafficShaping200ApplicationJsonObject?: Map<string, any>;
}
