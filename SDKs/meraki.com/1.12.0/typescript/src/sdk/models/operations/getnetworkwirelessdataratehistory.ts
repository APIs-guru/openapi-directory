import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessDataRateHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessDataRateHistoryBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessDataRateHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessDataRateHistoryBandEnum;

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


export class GetNetworkWirelessDataRateHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessDataRateHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessDataRateHistoryQueryParams;
}


export class GetNetworkWirelessDataRateHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessDataRateHistory200ApplicationJsonObject?: Map<string, any>;
}
