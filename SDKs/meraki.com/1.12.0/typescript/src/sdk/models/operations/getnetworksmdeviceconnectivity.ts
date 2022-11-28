import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmDeviceConnectivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmDeviceConnectivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetNetworkSmDeviceConnectivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmDeviceConnectivityPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSmDeviceConnectivityQueryParams;
}


export class GetNetworkSmDeviceConnectivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmDeviceConnectivity200ApplicationJsonObject?: Map<string, any>;
}
