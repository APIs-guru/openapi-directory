import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessLatencyHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessLatencyHistoryAccessCategoryEnum {
    BackgroundTraffic = "backgroundTraffic"
,    BestEffortTraffic = "bestEffortTraffic"
,    VideoTraffic = "videoTraffic"
,    VoiceTraffic = "voiceTraffic"
}

export enum GetNetworkWirelessLatencyHistoryBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessLatencyHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accessCategory" })
  accessCategory?: GetNetworkWirelessLatencyHistoryAccessCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessLatencyHistoryBandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ssid" })
  ssid?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkWirelessLatencyHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessLatencyHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessLatencyHistoryQueryParams;
}


export class GetNetworkWirelessLatencyHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
