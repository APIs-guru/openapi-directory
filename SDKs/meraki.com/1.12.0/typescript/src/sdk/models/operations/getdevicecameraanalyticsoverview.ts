import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraAnalyticsOverviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceCameraAnalyticsOverviewObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsOverviewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceCameraAnalyticsOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraAnalyticsOverviewPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceCameraAnalyticsOverviewQueryParams;
}


export class GetDeviceCameraAnalyticsOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraAnalyticsOverview200ApplicationJsonObject?: Map<string, any>;
}
