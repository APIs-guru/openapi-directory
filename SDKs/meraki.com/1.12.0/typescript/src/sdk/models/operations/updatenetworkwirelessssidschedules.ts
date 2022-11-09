import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDay" })
  endDay: string;

  @Metadata({ data: "json, name=endTime" })
  endTime: string;

  @Metadata({ data: "json, name=startDay" })
  startDay: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: string;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: number;

  @Metadata({ data: "json, name=start" })
  start: number;
}


export class UpdateNetworkWirelessSsidSchedulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ranges", elemType: operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges })
  ranges?: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[];

  @Metadata({ data: "json, name=rangesInSeconds", elemType: operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds })
  rangesInSeconds?: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[];
}


export class UpdateNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidSchedulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidSchedulesRequestBody;
}


export class UpdateNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidSchedules200ApplicationJsonObject?: Map<string, any>;
}
