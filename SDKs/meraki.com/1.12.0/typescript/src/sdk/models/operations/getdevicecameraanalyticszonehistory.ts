import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraAnalyticsZoneHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoneId" })
  zoneId: string;
}

export enum GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsZoneHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceCameraAnalyticsZoneHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraAnalyticsZoneHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceCameraAnalyticsZoneHistoryQueryParams;
}


export class GetDeviceCameraAnalyticsZoneHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraAnalyticsZoneHistory200ApplicationJsonObject?: Map<string, any>;
}
