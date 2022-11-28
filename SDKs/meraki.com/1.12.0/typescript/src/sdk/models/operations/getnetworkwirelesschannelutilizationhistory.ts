import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessChannelUtilizationHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkWirelessChannelUtilizationHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}


export class GetNetworkWirelessChannelUtilizationHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" })
  apTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" })
  autoResolution?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" })
  band?: GetNetworkWirelessChannelUtilizationHistoryBandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkWirelessChannelUtilizationHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessChannelUtilizationHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkWirelessChannelUtilizationHistoryQueryParams;
}


export class GetNetworkWirelessChannelUtilizationHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessChannelUtilizationHistory200ApplicationJsonObject?: Map<string, any>;
}
