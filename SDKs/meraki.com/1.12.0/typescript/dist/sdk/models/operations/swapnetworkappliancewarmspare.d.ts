import { SpeakeasyBase } from "../../../internal/utils";
export declare class SwapNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class SwapNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    pathParams: SwapNetworkApplianceWarmSparePathParams;
}
export declare class SwapNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    swapNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
