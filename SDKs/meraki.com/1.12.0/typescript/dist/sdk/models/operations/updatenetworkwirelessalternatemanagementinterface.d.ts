import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessAlternateManagementInterfacePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints extends SpeakeasyBase {
    alternateManagementIp: string;
    dns1?: string;
    dns2?: string;
    gateway?: string;
    serial: string;
    subnetMask?: string;
}
export declare enum UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog",
    Ldap = "ldap"
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
    accessPoints?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[];
    enabled?: boolean;
    protocols?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[];
    vlanId?: number;
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessAlternateManagementInterfacePathParams;
    request?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
