import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceManagementInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    NotConfigured = "not configured"
}


// UpdateDeviceManagementInterfaceRequestBodyWan1
/** 
 * WAN 1 settings
**/
export class UpdateDeviceManagementInterfaceRequestBodyWan1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticDns" })
  staticDns?: string[];

  @SpeakeasyMetadata({ data: "json, name=staticGatewayIp" })
  staticGatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=staticIp" })
  staticIp?: string;

  @SpeakeasyMetadata({ data: "json, name=staticSubnetMask" })
  staticSubnetMask?: string;

  @SpeakeasyMetadata({ data: "json, name=usingStaticIp" })
  usingStaticIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;

  @SpeakeasyMetadata({ data: "json, name=wanEnabled" })
  wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
}

export enum UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    NotConfigured = "not configured"
}


// UpdateDeviceManagementInterfaceRequestBodyWan2
/** 
 * WAN 2 settings (only for MX devices)
**/
export class UpdateDeviceManagementInterfaceRequestBodyWan2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticDns" })
  staticDns?: string[];

  @SpeakeasyMetadata({ data: "json, name=staticGatewayIp" })
  staticGatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=staticIp" })
  staticIp?: string;

  @SpeakeasyMetadata({ data: "json, name=staticSubnetMask" })
  staticSubnetMask?: string;

  @SpeakeasyMetadata({ data: "json, name=usingStaticIp" })
  usingStaticIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;

  @SpeakeasyMetadata({ data: "json, name=wanEnabled" })
  wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
}


export class UpdateDeviceManagementInterfaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wan1" })
  wan1?: UpdateDeviceManagementInterfaceRequestBodyWan1;

  @SpeakeasyMetadata({ data: "json, name=wan2" })
  wan2?: UpdateDeviceManagementInterfaceRequestBodyWan2;
}


export class UpdateDeviceManagementInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceManagementInterfacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceManagementInterfaceRequestBody;
}


export class UpdateDeviceManagementInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
