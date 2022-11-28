import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStatsSeriesPeriodFieldsPeriodEnum {
    Day = "day",
    Month = "month"
}


export class GetStatsSeriesPeriodFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fields" })
  fields: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetStatsSeriesPeriodFieldsPeriodEnum;
}


export class GetStatsSeriesPeriodFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetStatsSeriesPeriodFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatsSeriesPeriodFieldsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStatsSeriesPeriodFieldsQueryParams;
}


export class GetStatsSeriesPeriodFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
