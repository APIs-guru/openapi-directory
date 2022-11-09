import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraAnalyticsOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceCameraAnalyticsOverviewObjectTypeEnum {
    Person = "person"
,    Vehicle = "vehicle"
}


export class GetDeviceCameraAnalyticsOverviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceCameraAnalyticsOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraAnalyticsOverviewPathParams;

  @Metadata()
  queryParams: GetDeviceCameraAnalyticsOverviewQueryParams;
}


export class GetDeviceCameraAnalyticsOverviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraAnalyticsOverview200ApplicationJsonObject?: Map<string, any>;
}
