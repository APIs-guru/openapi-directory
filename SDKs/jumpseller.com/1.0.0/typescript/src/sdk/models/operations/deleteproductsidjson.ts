import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProductsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsIdJsonQueryParams;
}


export class DeleteProductsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProductsIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
