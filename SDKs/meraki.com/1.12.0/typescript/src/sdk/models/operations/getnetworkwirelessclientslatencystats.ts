import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessClientsLatencyStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessClientsLatencyStatsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessClientsLatencyStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessClientsLatencyStatsBandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ssid" })
  ssid?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan" })
  vlan?: number;
}


export class GetNetworkWirelessClientsLatencyStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessClientsLatencyStatsPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessClientsLatencyStatsQueryParams;
}


export class GetNetworkWirelessClientsLatencyStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessClientsLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
