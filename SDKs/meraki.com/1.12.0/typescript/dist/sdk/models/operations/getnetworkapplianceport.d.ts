import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkAppliancePortPathParams extends SpeakeasyBase {
    networkId: string;
    portId: string;
}
export declare class GetNetworkAppliancePortRequest extends SpeakeasyBase {
    pathParams: GetNetworkAppliancePortPathParams;
}
export declare class GetNetworkAppliancePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
