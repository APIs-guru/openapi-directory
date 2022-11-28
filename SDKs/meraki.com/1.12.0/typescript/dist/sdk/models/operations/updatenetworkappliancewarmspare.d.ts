import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceWarmSpareRequestBody extends SpeakeasyBase {
    enabled: boolean;
    spareSerial?: string;
    uplinkMode?: string;
    virtualIp1?: string;
    virtualIp2?: string;
}
export declare class UpdateNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceWarmSparePathParams;
    request: UpdateNetworkApplianceWarmSpareRequestBody;
}
export declare class UpdateNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
