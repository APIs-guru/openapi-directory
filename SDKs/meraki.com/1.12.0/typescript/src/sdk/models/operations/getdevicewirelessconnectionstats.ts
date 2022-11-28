import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceWirelessConnectionStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceWirelessConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetDeviceWirelessConnectionStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetDeviceWirelessConnectionStatsBandEnum;

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


export class GetDeviceWirelessConnectionStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceWirelessConnectionStatsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceWirelessConnectionStatsQueryParams;
}


export class GetDeviceWirelessConnectionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceWirelessConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
