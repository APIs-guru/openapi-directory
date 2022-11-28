import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessDataRateHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessDataRateHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessDataRateHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessDataRateHistoryBandEnum;

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


export class GetNetworkWirelessDataRateHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessDataRateHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessDataRateHistoryQueryParams;
}


export class GetNetworkWirelessDataRateHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessDataRateHistory200ApplicationJsonObject?: Map<string, any>;
}
