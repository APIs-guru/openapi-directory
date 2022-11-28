import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceSingleLanPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceSingleLanRequestBody extends SpeakeasyBase {
    applianceIp?: string;
    subnet?: string;
}
export declare class UpdateNetworkApplianceSingleLanRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceSingleLanPathParams;
    request?: UpdateNetworkApplianceSingleLanRequestBody;
}
export declare class UpdateNetworkApplianceSingleLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceSingleLan200ApplicationJsonObject?: Map<string, any>;
}
