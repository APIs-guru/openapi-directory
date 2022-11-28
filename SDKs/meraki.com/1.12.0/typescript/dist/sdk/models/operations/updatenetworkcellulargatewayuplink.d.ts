import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The bandwidth settings for the 'cellular' uplink
**/
export declare class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
export declare class UpdateNetworkCellularGatewayUplinkRequestBody extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
}
export declare class UpdateNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCellularGatewayUplinkPathParams;
    request?: UpdateNetworkCellularGatewayUplinkRequestBody;
}
export declare class UpdateNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCellularGatewayUplink200ApplicationJsonObject?: Map<string, any>;
}
