import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmDeviceConnectivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceConnectivityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmDeviceConnectivityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmDeviceConnectivityPathParams;

  @Metadata()
  queryParams: GetNetworkSmDeviceConnectivityQueryParams;
}


export class GetNetworkSmDeviceConnectivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmDeviceConnectivity200ApplicationJsonObject?: Map<string, any>;
}
