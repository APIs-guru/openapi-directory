import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessClientConnectivityEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessClientConnectivityEventsBandEnum {
    Two4 = "2.4",
    Five = "5"
}

export enum GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum {
    Good = "good",
    Info = "info",
    Warn = "warn",
    Bad = "bad"
}

export enum GetNetworkWirelessClientConnectivityEventsTypesEnum {
    Assoc = "assoc",
    Disassoc = "disassoc",
    Auth = "auth",
    Deauth = "deauth",
    Dns = "dns",
    Dhcp = "dhcp",
    Roam = "roam",
    Connection = "connection",
    Sticky = "sticky"
}


export class GetNetworkWirelessClientConnectivityEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessClientConnectivityEventsBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includedSeverities" })
  includedSeverities?: GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" })
  ssidNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=types" })
  types?: GetNetworkWirelessClientConnectivityEventsTypesEnum[];
}


export class GetNetworkWirelessClientConnectivityEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessClientConnectivityEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessClientConnectivityEventsQueryParams;
}


export class GetNetworkWirelessClientConnectivityEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessClientConnectivityEvents200ApplicationJsonObject?: Map<string, any>;
}
