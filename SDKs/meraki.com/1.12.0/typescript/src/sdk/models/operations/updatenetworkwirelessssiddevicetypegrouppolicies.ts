import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    GroupPolicy = "Group policy"
}

export enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum {
    Android = "Android"
,    BlackBerry = "BlackBerry"
,    ChromeOs = "Chrome OS"
,    IPad = "iPad"
,    IPhone = "iPhone"
,    IPod = "iPod"
,    MacOsX = "Mac OS X"
,    Windows = "Windows"
,    WindowsPhone = "Windows Phone"
,    BAndNNook = "B&N Nook"
,    OtherOs = "Other OS"
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;

  @Metadata({ data: "json, name=deviceType" })
  deviceType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: number;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceTypePolicies", elemType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies })
  deviceTypePolicies?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
}


export class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
