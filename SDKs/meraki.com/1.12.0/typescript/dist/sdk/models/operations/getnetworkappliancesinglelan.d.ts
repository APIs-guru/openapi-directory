import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceSingleLanPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceSingleLanRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceSingleLanPathParams;
}
export declare class GetNetworkApplianceSingleLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceSingleLan200ApplicationJsonObject?: Map<string, any>;
}
