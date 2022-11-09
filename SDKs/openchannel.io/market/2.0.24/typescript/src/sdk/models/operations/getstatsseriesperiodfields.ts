import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStatsSeriesPeriodFieldsPeriodEnum {
    Day = "day"
,    Month = "month"
}


export class GetStatsSeriesPeriodFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fields" })
  fields: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetStatsSeriesPeriodFieldsPeriodEnum;
}


export class GetStatsSeriesPeriodFieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetStatsSeriesPeriodFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatsSeriesPeriodFieldsPathParams;

  @Metadata()
  queryParams: GetStatsSeriesPeriodFieldsQueryParams;
}


export class GetStatsSeriesPeriodFieldsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
