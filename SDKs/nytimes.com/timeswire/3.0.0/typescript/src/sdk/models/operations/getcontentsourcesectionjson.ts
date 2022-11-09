import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetContentSourceSectionJsonSourceEnum {
    All = "all"
,    Nyt = "nyt"
,    Iht = "iht"
}


export class GetContentSourceSectionJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: GetContentSourceSectionJsonSourceEnum;
}


export class GetContentSourceSectionJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetContentSourceSectionJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContentSourceSectionJsonPathParams;

  @Metadata()
  queryParams: GetContentSourceSectionJsonQueryParams;
}


export class GetContentSourceSectionJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentSourceSectionJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentSourceSectionJson200ApplicationJsonObject?: GetContentSourceSectionJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
