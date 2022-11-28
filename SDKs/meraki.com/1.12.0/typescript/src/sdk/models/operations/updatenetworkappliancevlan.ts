import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vlanId" })
  vlanId: string;
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum {
    RunADhcpServer = "Run a DHCP server",
    RelayDhcpToAnotherServer = "Relay DHCP to another server",
    DoNotRespondToDhcpRequests = "Do not respond to DHCP requests"
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum {
    ThirtyMinutes = "30 minutes",
    OneHour = "1 hour",
    FourHours = "4 hours",
    TwelveHours = "12 hours",
    OneDay = "1 day",
    OneWeek = "1 week"
}

export enum UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum {
    Text = "text",
    Ip = "ip",
    Hex = "hex",
    Integer = "integer"
}


export class UpdateNetworkApplianceVlanRequestBodyDhcpOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class UpdateNetworkApplianceVlanRequestBodyReservedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=dhcpBootFilename" })
  dhcpBootFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=dhcpBootNextServer" })
  dhcpBootNextServer?: string;

  @SpeakeasyMetadata({ data: "json, name=dhcpBootOptionsEnabled" })
  dhcpBootOptionsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dhcpHandling" })
  dhcpHandling?: UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" })
  dhcpLeaseTime?: UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;

  @SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateNetworkApplianceVlanRequestBodyDhcpOptions })
  dhcpOptions?: UpdateNetworkApplianceVlanRequestBodyDhcpOptions[];

  @SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" })
  dhcpRelayServerIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsNameservers" })
  dnsNameservers?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedIpAssignments" })
  fixedIpAssignments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[];

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vpnNatSubnet" })
  vpnNatSubnet?: string;
}


export class UpdateNetworkApplianceVlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceVlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceVlanRequestBody;
}


export class UpdateNetworkApplianceVlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceVlan200ApplicationJsonObject?: Map<string, any>;
}
