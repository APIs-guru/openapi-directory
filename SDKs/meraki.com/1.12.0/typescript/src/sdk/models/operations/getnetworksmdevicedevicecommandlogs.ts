import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmDeviceDeviceCommandLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceDeviceCommandLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmDeviceDeviceCommandLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmDeviceDeviceCommandLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSmDeviceDeviceCommandLogsQueryParams;
}


export class GetNetworkSmDeviceDeviceCommandLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmDeviceDeviceCommandLogs200ApplicationJsonObject?: Map<string, any>;
}
