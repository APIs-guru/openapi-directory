import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessChannelUtilizationHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessChannelUtilizationHistoryBandEnum {
    Two4 = "2.4"
,    Five = "5"
}


export class GetNetworkWirelessChannelUtilizationHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessChannelUtilizationHistoryBandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkWirelessChannelUtilizationHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessChannelUtilizationHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessChannelUtilizationHistoryQueryParams;
}


export class GetNetworkWirelessChannelUtilizationHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessChannelUtilizationHistory200ApplicationJsonObject?: Map<string, any>;
}
