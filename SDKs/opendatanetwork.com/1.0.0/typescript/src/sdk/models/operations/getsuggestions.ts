import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSuggestionsTypeEnum {
    Entity = "entity",
    Category = "category",
    Publisher = "publisher",
    Dataset = "dataset",
    Question = "question"
}


export class GetSuggestionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: GetSuggestionsTypeEnum;
}


export class GetSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable_id" })
  variableId?: string;
}


export class GetSuggestionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSuggestionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSuggestionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetSuggestionsHeaders;
}


export class GetSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
