import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Integer = "integer",
    Hex = "hex"
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
    code: string;
    type: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
    value: string;
}
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns",
    Custom = "custom"
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
    ip: string;
    mac: string;
    name: string;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
    comment?: string;
    end: string;
    start: string;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
    bootFileName?: string;
    bootNextServer?: string;
    bootOptionsEnabled?: boolean;
    dhcpLeaseTime?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
    dhcpMode?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
    dhcpOptions?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[];
    dhcpRelayServerIps?: string[];
    dnsCustomNameservers?: string[];
    dnsNameserversOption?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
    fixedIpAssignments?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];
    reservedIpRanges?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams;
    request?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
