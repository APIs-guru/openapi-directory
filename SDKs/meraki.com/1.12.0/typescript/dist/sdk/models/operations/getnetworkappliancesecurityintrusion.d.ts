import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceSecurityIntrusionPathParams;
}
export declare class GetNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
