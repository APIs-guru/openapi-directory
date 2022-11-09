import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDevicePerformanceHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDevicePerformanceHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmDevicePerformanceHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDevicePerformanceHistoryPathParams;

  @Metadata()
  queryParams: GetNetworkSmDevicePerformanceHistoryQueryParams;
}


export class GetNetworkSmDevicePerformanceHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDevicePerformanceHistory200ApplicationJsonObject?: Map<string, any>;
}
