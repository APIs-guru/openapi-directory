import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    GroupPolicy = "Group policy"
}

export enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum {
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


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: number;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceTypePolicies", elemType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies })
  deviceTypePolicies?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
