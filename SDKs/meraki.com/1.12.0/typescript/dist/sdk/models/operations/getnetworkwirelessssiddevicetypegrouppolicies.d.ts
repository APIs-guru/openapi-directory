import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
}
export declare class GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
