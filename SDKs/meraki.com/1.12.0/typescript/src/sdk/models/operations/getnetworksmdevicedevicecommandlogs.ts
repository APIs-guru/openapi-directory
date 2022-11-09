import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceDeviceCommandLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceDeviceCommandLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmDeviceDeviceCommandLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceDeviceCommandLogsPathParams;

  @Metadata()
  queryParams: GetNetworkSmDeviceDeviceCommandLogsQueryParams;
}


export class GetNetworkSmDeviceDeviceCommandLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceDeviceCommandLogs200ApplicationJsonObject?: Map<string, any>;
}
