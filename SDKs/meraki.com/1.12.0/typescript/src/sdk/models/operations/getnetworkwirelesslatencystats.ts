import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessLatencyStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessLatencyStatsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessLatencyStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessLatencyStatsBandEnum;

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


export class GetNetworkWirelessLatencyStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessLatencyStatsPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessLatencyStatsQueryParams;
}


export class GetNetworkWirelessLatencyStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
