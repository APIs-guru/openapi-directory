import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceManagementInterfacePathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    NotConfigured = "not configured"
}
/**
 * WAN 1 settings
**/
export declare class UpdateDeviceManagementInterfaceRequestBodyWan1 extends SpeakeasyBase {
    staticDns?: string[];
    staticGatewayIp?: string;
    staticIp?: string;
    staticSubnetMask?: string;
    usingStaticIp?: boolean;
    vlan?: number;
    wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
}
export declare enum UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    NotConfigured = "not configured"
}
/**
 * WAN 2 settings (only for MX devices)
**/
export declare class UpdateDeviceManagementInterfaceRequestBodyWan2 extends SpeakeasyBase {
    staticDns?: string[];
    staticGatewayIp?: string;
    staticIp?: string;
    staticSubnetMask?: string;
    usingStaticIp?: boolean;
    vlan?: number;
    wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
}
export declare class UpdateDeviceManagementInterfaceRequestBody extends SpeakeasyBase {
    wan1?: UpdateDeviceManagementInterfaceRequestBodyWan1;
    wan2?: UpdateDeviceManagementInterfaceRequestBodyWan2;
}
export declare class UpdateDeviceManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceManagementInterfacePathParams;
    request?: UpdateDeviceManagementInterfaceRequestBody;
}
export declare class UpdateDeviceManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
