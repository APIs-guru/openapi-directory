import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessLatencyHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessLatencyHistoryAccessCategoryEnum {
    BackgroundTraffic = "backgroundTraffic",
    BestEffortTraffic = "bestEffortTraffic",
    VideoTraffic = "videoTraffic",
    VoiceTraffic = "voiceTraffic"
}

export enum GetNetworkWirelessLatencyHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessLatencyHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessCategory" })
  accessCategory?: GetNetworkWirelessLatencyHistoryAccessCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessLatencyHistoryBandEnum;

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


export class GetNetworkWirelessLatencyHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessLatencyHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessLatencyHistoryQueryParams;
}


export class GetNetworkWirelessLatencyHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
