import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vlanId" })
  vlanId: string;
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum {
    RunADhcpServer = "Run a DHCP server"
,    RelayDhcpToAnotherServer = "Relay DHCP to another server"
,    DoNotRespondToDhcpRequests = "Do not respond to DHCP requests"
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes"
,    OneHour = "1 hour"
,    FourHours = "4 hours"
,    TwelveHours = "12 hours"
,    OneDay = "1 day"
,    OneWeek = "1 week"
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum {
    Text = "text"
,    Ip = "ip"
,    Hex = "hex"
,    Integer = "integer"
}


export class UpdateNetworkApplianceVlanRequestBodyDhcpOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class UpdateNetworkApplianceVlanRequestBodyReservedIpRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @Metadata({ data: "json, name=dhcpBootFilename" })
  dhcpBootFilename?: string;

  @Metadata({ data: "json, name=dhcpBootNextServer" })
  dhcpBootNextServer?: string;

  @Metadata({ data: "json, name=dhcpBootOptionsEnabled" })
  dhcpBootOptionsEnabled?: boolean;

  @Metadata({ data: "json, name=dhcpHandling" })
  dhcpHandling?: UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;

  @Metadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;

  @Metadata({ data: "json, name=dhcpOptions", elemType: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions })
  dhcpOptions?: UpdateNetworkApplianceVlanRequestBodyDhcpOptions[];

  @Metadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @Metadata({ data: "json, name=dnsNameservers" })
  dnsNameservers?: string;

  @Metadata({ data: "json, name=fixedIpAssignments" })
  fixedIpAssignments?: Map<string, any>;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reservedIpRanges", elemType: operations.UpdateNetworkApplianceVlanRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[];

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vpnNatSubnet" })
  vpnNatSubnet?: string;
}


export class UpdateNetworkApplianceVlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceVlanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceVlanRequestBody;
}


export class UpdateNetworkApplianceVlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceVlan200ApplicationJsonObject?: Map<string, any>;
}
