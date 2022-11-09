import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceWirelessConnectionStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceWirelessConnectionStatsBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetDeviceWirelessConnectionStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetDeviceWirelessConnectionStatsBandEnum;

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


export class GetDeviceWirelessConnectionStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceWirelessConnectionStatsPathParams;

  @Metadata()
  queryParams: GetDeviceWirelessConnectionStatsQueryParams;
}


export class GetDeviceWirelessConnectionStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceWirelessConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
