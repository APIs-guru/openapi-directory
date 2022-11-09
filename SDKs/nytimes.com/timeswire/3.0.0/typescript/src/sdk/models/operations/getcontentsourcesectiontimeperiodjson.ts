import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetContentSourceSectionTimePeriodJsonSourceEnum {
    All = "all"
,    Nyt = "nyt"
,    Iht = "iht"
}


export class GetContentSourceSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: GetContentSourceSectionTimePeriodJsonSourceEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: number;
}


export class GetContentSourceSectionTimePeriodJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetContentSourceSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContentSourceSectionTimePeriodJsonPathParams;

  @Metadata()
  queryParams: GetContentSourceSectionTimePeriodJsonQueryParams;
}


export class GetContentSourceSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentSourceSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentSourceSectionTimePeriodJson200ApplicationJsonObject?: GetContentSourceSectionTimePeriodJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
