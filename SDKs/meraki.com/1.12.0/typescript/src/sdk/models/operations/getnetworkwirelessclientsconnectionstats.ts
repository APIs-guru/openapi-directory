import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessClientsConnectionStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessClientsConnectionStatsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessClientsConnectionStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessClientsConnectionStatsBandEnum;

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


export class GetNetworkWirelessClientsConnectionStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessClientsConnectionStatsPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessClientsConnectionStatsQueryParams;
}


export class GetNetworkWirelessClientsConnectionStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessClientsConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
