import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceWirelessLatencyStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceWirelessLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetDeviceWirelessLatencyStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetDeviceWirelessLatencyStatsBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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


export class GetDeviceWirelessLatencyStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceWirelessLatencyStatsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceWirelessLatencyStatsQueryParams;
}


export class GetDeviceWirelessLatencyStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceWirelessLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
