import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidSchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDay" })
  endDay: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: string;

  @SpeakeasyMetadata({ data: "json, name=startDay" })
  startDay: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: string;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: number;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ranges", elemType: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges })
  ranges?: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[];

  @SpeakeasyMetadata({ data: "json, name=rangesInSeconds", elemType: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds })
  rangesInSeconds?: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[];
}


export class UpdateNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidSchedulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidSchedulesRequestBody;
}


export class UpdateNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidSchedules200ApplicationJsonObject?: Map<string, any>;
}
