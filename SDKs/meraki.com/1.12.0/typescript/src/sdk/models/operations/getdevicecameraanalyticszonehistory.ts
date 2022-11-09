import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraAnalyticsZoneHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zoneId" })
  zoneId: string;
}

export enum GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum {
    Person = "person"
,    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsZoneHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceCameraAnalyticsZoneHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraAnalyticsZoneHistoryPathParams;

  @Metadata()
  queryParams: GetDeviceCameraAnalyticsZoneHistoryQueryParams;
}


export class GetDeviceCameraAnalyticsZoneHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraAnalyticsZoneHistory200ApplicationJsonObject?: Map<string, any>;
}
