import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Integer = "integer",
    Hex = "hex"
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns",
    Custom = "custom"
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootFileName" })
  bootFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=bootNextServer" })
  bootNextServer?: string;

  @SpeakeasyMetadata({ data: "json, name=bootOptionsEnabled" })
  bootOptionsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpMode" })
  dhcpMode?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions })
  dhcpOptions?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[];

  @SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsNameserversOption" })
  dnsNameserversOption?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];

  @SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
}


export class UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
