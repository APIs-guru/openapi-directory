import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: PutCategoriesIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CategoryEdit;
}


export class PutCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  category?: shared.Category;

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
