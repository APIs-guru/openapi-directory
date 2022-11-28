import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetContentSourceSectionJsonSourceEnum {
    All = "all",
    Nyt = "nyt",
    Iht = "iht"
}


export class GetContentSourceSectionJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: GetContentSourceSectionJsonSourceEnum;
}


export class GetContentSourceSectionJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetContentSourceSectionJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentSourceSectionJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentSourceSectionJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContentSourceSectionJsonQueryParams;
}


export class GetContentSourceSectionJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentSourceSectionJson200ApplicationJsonObject?: GetContentSourceSectionJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
