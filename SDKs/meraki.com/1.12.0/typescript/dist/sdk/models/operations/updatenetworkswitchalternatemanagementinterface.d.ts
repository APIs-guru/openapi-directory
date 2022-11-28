import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog"
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches extends SpeakeasyBase {
    alternateManagementIp: string;
    serial: string;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
    enabled?: boolean;
    protocols?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[];
    switches?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[];
    vlanId?: number;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchAlternateManagementInterfacePathParams;
    request?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
