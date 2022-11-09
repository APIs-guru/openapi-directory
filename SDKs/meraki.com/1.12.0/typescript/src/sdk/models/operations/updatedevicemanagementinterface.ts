import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    NotConfigured = "not configured"
}


// UpdateDeviceManagementInterfaceRequestBodyWan1
/** 
 * WAN 1 settings
**/
export class UpdateDeviceManagementInterfaceRequestBodyWan1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticDns" })
  staticDns?: string[];

  @Metadata({ data: "json, name=staticGatewayIp" })
  staticGatewayIp?: string;

  @Metadata({ data: "json, name=staticIp" })
  staticIp?: string;

  @Metadata({ data: "json, name=staticSubnetMask" })
  staticSubnetMask?: string;

  @Metadata({ data: "json, name=usingStaticIp" })
  usingStaticIp?: boolean;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;

  @Metadata({ data: "json, name=wanEnabled" })
  wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
}

export enum UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    NotConfigured = "not configured"
}


// UpdateDeviceManagementInterfaceRequestBodyWan2
/** 
 * WAN 2 settings (only for MX devices)
**/
export class UpdateDeviceManagementInterfaceRequestBodyWan2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticDns" })
  staticDns?: string[];

  @Metadata({ data: "json, name=staticGatewayIp" })
  staticGatewayIp?: string;

  @Metadata({ data: "json, name=staticIp" })
  staticIp?: string;

  @Metadata({ data: "json, name=staticSubnetMask" })
  staticSubnetMask?: string;

  @Metadata({ data: "json, name=usingStaticIp" })
  usingStaticIp?: boolean;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;

  @Metadata({ data: "json, name=wanEnabled" })
  wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
}


export class UpdateDeviceManagementInterfaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=wan1" })
  wan1?: UpdateDeviceManagementInterfaceRequestBodyWan1;

  @Metadata({ data: "json, name=wan2" })
  wan2?: UpdateDeviceManagementInterfaceRequestBodyWan2;
}


export class UpdateDeviceManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceManagementInterfacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceManagementInterfaceRequestBody;
}


export class UpdateDeviceManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
