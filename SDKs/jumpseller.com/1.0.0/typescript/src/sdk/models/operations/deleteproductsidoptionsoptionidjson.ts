import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class DeleteProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdOptionsOptionIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdOptionsOptionIdJsonQueryParams;
}


export class DeleteProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdOptionsOptionIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
