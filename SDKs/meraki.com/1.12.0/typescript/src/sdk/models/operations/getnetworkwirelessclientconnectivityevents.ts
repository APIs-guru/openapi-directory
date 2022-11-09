import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessClientConnectivityEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessClientConnectivityEventsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}

export enum GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum {
    Good = "good"
,    Info = "info"
,    Warn = "warn"
,    Bad = "bad"
}

export enum GetNetworkWirelessClientConnectivityEventsTypesEnum {
    Assoc = "assoc"
,    Disassoc = "disassoc"
,    Auth = "auth"
,    Deauth = "deauth"
,    Dns = "dns"
,    Dhcp = "dhcp"
,    Roam = "roam"
,    Connection = "connection"
,    Sticky = "sticky"
}


export class GetNetworkWirelessClientConnectivityEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessClientConnectivityEventsBandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=includedSeverities" })
  includedSeverities?: GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" })
  ssidNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=types" })
  types?: GetNetworkWirelessClientConnectivityEventsTypesEnum[];
}


export class GetNetworkWirelessClientConnectivityEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessClientConnectivityEventsPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessClientConnectivityEventsQueryParams;
}


export class GetNetworkWirelessClientConnectivityEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessClientConnectivityEvents200ApplicationJsonObject?: Map<string, any>;
}
