import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes"
,    OneHour = "1 hour"
,    FourHours = "4 hours"
,    TwelveHours = "12 hours"
,    OneDay = "1 day"
,    OneWeek = "1 week"
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled"
,    DhcpRelay = "dhcpRelay"
,    DhcpServer = "dhcpServer"
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text"
,    Ip = "ip"
,    Integer = "integer"
,    Hex = "hex"
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns"
,    OpenDns = "openDns"
,    Custom = "custom"
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=mac" })
  mac: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootFileName" })
  bootFileName?: string;

  @Metadata({ data: "json, name=bootNextServer" })
  bootNextServer?: string;

  @Metadata({ data: "json, name=bootOptionsEnabled" })
  bootOptionsEnabled?: boolean;

  @Metadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;

  @Metadata({ data: "json, name=dhcpMode" })
  dhcpMode?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;

  @Metadata({ data: "json, name=dhcpOptions", elemType: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions })
  dhcpOptions?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[];

  @Metadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @Metadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @Metadata({ data: "json, name=dnsNameserversOption" })
  dnsNameserversOption?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;

  @Metadata({ data: "json, name=fixedIpAssignments", elemType: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];

  @Metadata({ data: "json, name=reservedIpRanges", elemType: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
