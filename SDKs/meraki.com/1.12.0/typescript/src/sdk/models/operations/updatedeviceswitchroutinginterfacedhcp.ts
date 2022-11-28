import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Integer = "integer",
    Hex = "hex"
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns",
    Custom = "custom"
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootFileName" })
  bootFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=bootNextServer" })
  bootNextServer?: string;

  @SpeakeasyMetadata({ data: "json, name=bootOptionsEnabled" })
  bootOptionsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpMode" })
  dhcpMode?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions })
  dhcpOptions?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[];

  @SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" })
  dnsCustomNameservers?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsNameserversOption" })
  dnsNameserversOption?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];

  @SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
}


export class UpdateDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
