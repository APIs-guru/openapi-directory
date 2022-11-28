import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Integer = "integer",
    Hex = "hex"
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
    code: string;
    type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
    value: string;
}
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns",
    Custom = "custom"
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
    ip: string;
    mac: string;
    name: string;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
    comment?: string;
    end: string;
    start: string;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
    bootFileName?: string;
    bootNextServer?: string;
    bootOptionsEnabled?: boolean;
    dhcpLeaseTime?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
    dhcpMode?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
    dhcpOptions?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[];
    dhcpRelayServerIps?: string[];
    dnsCustomNameservers?: string[];
    dnsNameserversOption?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
    fixedIpAssignments?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];
    reservedIpRanges?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams;
    request?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
