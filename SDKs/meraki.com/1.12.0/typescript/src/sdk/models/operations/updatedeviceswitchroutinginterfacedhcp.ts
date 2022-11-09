import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes"
,    OneHour = "1 hour"
,    FourHours = "4 hours"
,    TwelveHours = "12 hours"
,    OneDay = "1 day"
,    OneWeek = "1 week"
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled"
,    DhcpRelay = "dhcpRelay"
,    DhcpServer = "dhcpServer"
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text"
,    Ip = "ip"
,    Integer = "integer"
,    Hex = "hex"
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns"
,    OpenDns = "openDns"
,    Custom = "custom"
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=mac" })
  mac: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootFileName" })
  bootFileName?: string;

  @Metadata({ data: "json, name=bootNextServer" })
  bootNextServer?: string;

  @Metadata({ data: "json, name=bootOptionsEnabled" })
  bootOptionsEnabled?: boolean;

  @Metadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;

  @Metadata({ data: "json, name=dhcpMode" })
  dhcpMode?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;

  @Metadata({ data: "json, name=dhcpOptions", elemType: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions })
  dhcpOptions?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[];

  @Metadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @Metadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @Metadata({ data: "json, name=dnsNameserversOption" })
  dnsNameserversOption?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;

  @Metadata({ data: "json, name=fixedIpAssignments", elemType: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];

  @Metadata({ data: "json, name=reservedIpRanges", elemType: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
