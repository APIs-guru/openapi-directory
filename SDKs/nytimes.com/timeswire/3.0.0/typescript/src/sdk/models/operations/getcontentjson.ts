import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContentJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetContentJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContentJsonQueryParams;
}


export class GetContentJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentJson200ApplicationJsonObject?: GetContentJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
