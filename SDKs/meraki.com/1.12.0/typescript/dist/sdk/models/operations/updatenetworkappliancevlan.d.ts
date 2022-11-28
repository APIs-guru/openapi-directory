import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceVlanPathParams extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum {
    RunADhcpServer = "Run a DHCP server",
    RelayDhcpToAnotherServer = "Relay DHCP to another server",
    DoNotRespondToDhcpRequests = "Do not respond to DHCP requests"
}
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Hex = "hex",
    Integer = "integer"
}
export declare class UpdateNetworkApplianceVlanRequestBodyDhcpOptions extends SpeakeasyBase {
    code: string;
    type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
    value: string;
}
export declare class UpdateNetworkApplianceVlanRequestBodyReservedIpRanges extends SpeakeasyBase {
    comment: string;
    end: string;
    start: string;
}
export declare class UpdateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
    applianceIp?: string;
    dhcpBootFilename?: string;
    dhcpBootNextServer?: string;
    dhcpBootOptionsEnabled?: boolean;
    dhcpHandling?: UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
    dhcpLeaseTime?: UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
    dhcpOptions?: UpdateNetworkApplianceVlanRequestBodyDhcpOptions[];
    dhcpRelayServerIps?: string[];
    dnsNameservers?: string;
    fixedIpAssignments?: Map<string, any>;
    groupPolicyId?: string;
    name?: string;
    reservedIpRanges?: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[];
    subnet?: string;
    vpnNatSubnet?: string;
}
export declare class UpdateNetworkApplianceVlanRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceVlanPathParams;
    request?: UpdateNetworkApplianceVlanRequestBody;
}
export declare class UpdateNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceVlan200ApplicationJsonObject?: Map<string, any>;
}
