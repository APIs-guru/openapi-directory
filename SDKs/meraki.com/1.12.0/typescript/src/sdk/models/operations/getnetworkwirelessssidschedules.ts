import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidSchedulesPathParams;
}


export class GetNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidSchedules200ApplicationJsonObject?: Map<string, any>;
}
