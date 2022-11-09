import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraAnalyticsRecentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceCameraAnalyticsRecentObjectTypeEnum {
    Person = "person"
,    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsRecentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsRecentObjectTypeEnum;
}


export class GetDeviceCameraAnalyticsRecentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraAnalyticsRecentPathParams;

  @Metadata()
  queryParams: GetDeviceCameraAnalyticsRecentQueryParams;
}


export class GetDeviceCameraAnalyticsRecentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraAnalyticsRecent200ApplicationJsonObject?: Map<string, any>;
}
