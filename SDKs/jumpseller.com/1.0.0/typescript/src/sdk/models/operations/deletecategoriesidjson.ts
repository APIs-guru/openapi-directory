import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCategoriesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCategoriesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCategoriesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCategoriesIdJsonPathParams;

  @Metadata()
  queryParams: DeleteCategoriesIdJsonQueryParams;
}


export class DeleteCategoriesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCategoriesIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
