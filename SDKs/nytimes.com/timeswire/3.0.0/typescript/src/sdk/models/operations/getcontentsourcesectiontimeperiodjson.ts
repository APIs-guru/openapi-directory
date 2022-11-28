import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetContentSourceSectionTimePeriodJsonSourceEnum {
    All = "all",
    Nyt = "nyt",
    Iht = "iht"
}


export class GetContentSourceSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: GetContentSourceSectionTimePeriodJsonSourceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: number;
}


export class GetContentSourceSectionTimePeriodJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetContentSourceSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentSourceSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentSourceSectionTimePeriodJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContentSourceSectionTimePeriodJsonQueryParams;
}


export class GetContentSourceSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentSourceSectionTimePeriodJson200ApplicationJsonObject?: GetContentSourceSectionTimePeriodJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
