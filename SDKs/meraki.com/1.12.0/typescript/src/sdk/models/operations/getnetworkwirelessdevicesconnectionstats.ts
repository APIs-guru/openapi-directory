import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessDevicesConnectionStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessDevicesConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessDevicesConnectionStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessDevicesConnectionStatsBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" })
  ssid?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" })
  vlan?: number;
}


export class GetNetworkWirelessDevicesConnectionStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessDevicesConnectionStatsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessDevicesConnectionStatsQueryParams;
}


export class GetNetworkWirelessDevicesConnectionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessDevicesConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
