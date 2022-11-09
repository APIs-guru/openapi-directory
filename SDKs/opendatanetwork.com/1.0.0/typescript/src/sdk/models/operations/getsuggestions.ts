import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSuggestionsTypeEnum {
    Entity = "entity"
,    Category = "category"
,    Publisher = "publisher"
,    Dataset = "dataset"
,    Question = "question"
}


export class GetSuggestionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: GetSuggestionsTypeEnum;
}


export class GetSuggestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variable_id" })
  variableId?: string;
}


export class GetSuggestionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetSuggestionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSuggestionsPathParams;

  @Metadata()
  queryParams: GetSuggestionsQueryParams;

  @Metadata()
  headers: GetSuggestionsHeaders;
}


export class GetSuggestionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
