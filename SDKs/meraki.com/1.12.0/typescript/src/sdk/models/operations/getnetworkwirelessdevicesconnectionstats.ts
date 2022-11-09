import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessDevicesConnectionStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessDevicesConnectionStatsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessDevicesConnectionStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessDevicesConnectionStatsBandEnum;

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


export class GetNetworkWirelessDevicesConnectionStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessDevicesConnectionStatsPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessDevicesConnectionStatsQueryParams;
}


export class GetNetworkWirelessDevicesConnectionStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessDevicesConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
