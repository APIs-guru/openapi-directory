import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProductsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdJsonQueryParams;
}


export class DeleteProductsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
