import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessClientCountHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessClientCountHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessClientCountHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessClientCountHistoryBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" })
  ssid?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkWirelessClientCountHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessClientCountHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessClientCountHistoryQueryParams;
}


export class GetNetworkWirelessClientCountHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessClientCountHistory200ApplicationJsonObject?: Map<string, any>;
}
