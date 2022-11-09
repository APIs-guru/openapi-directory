import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContentJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetContentJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContentJsonQueryParams;
}


export class GetContentJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetContentJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentJson200ApplicationJsonObject?: GetContentJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
