import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    GroupPolicy = "Group policy"
}
export declare enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum {
    Android = "Android",
    BlackBerry = "BlackBerry",
    ChromeOs = "Chrome OS",
    IPad = "iPad",
    IPhone = "iPhone",
    IPod = "iPod",
    MacOsX = "Mac OS X",
    Windows = "Windows",
    WindowsPhone = "Windows Phone",
    BAndNNook = "B&N Nook",
    OtherOs = "Other OS"
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies extends SpeakeasyBase {
    devicePolicy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
    deviceType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
    groupPolicyId?: number;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody extends SpeakeasyBase {
    deviceTypePolicies?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[];
    enabled?: boolean;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;
    request?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
