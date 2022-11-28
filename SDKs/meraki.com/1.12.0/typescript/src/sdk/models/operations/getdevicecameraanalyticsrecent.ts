import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraAnalyticsRecentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceCameraAnalyticsRecentObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsRecentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsRecentObjectTypeEnum;
}


export class GetDeviceCameraAnalyticsRecentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraAnalyticsRecentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceCameraAnalyticsRecentQueryParams;
}


export class GetDeviceCameraAnalyticsRecentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraAnalyticsRecent200ApplicationJsonObject?: Map<string, any>;
}
