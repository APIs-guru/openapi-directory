import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The bandwidth settings for the 'cellular' uplink
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 * The bandwidth settings for the 'wan1' uplink
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 * The bandwidth settings for the 'wan2' uplink
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
**/
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits extends SpeakeasyBase {
    cellular?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
    wan1?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
    wan2?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams;
    request?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject?: Map<string, any>;
}
