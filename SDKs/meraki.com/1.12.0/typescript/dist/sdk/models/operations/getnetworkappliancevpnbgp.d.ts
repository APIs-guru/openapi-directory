import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceVpnBgpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceVpnBgpPathParams;
}
export declare class GetNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceVpnBgp200ApplicationJsonObject?: Map<string, any>;
}
