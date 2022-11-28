import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceWarmSparePathParams;
}
export declare class GetNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
