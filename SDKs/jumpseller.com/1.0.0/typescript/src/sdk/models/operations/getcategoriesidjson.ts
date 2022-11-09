import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: GetCategoriesIdJsonQueryParams;
}


export class GetCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  category?: shared.Category;

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
