import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceVlanPathParams extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare class GetNetworkApplianceVlanRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceVlanPathParams;
}
export declare class GetNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceVlan200ApplicationJsonObject?: Map<string, any>;
}
