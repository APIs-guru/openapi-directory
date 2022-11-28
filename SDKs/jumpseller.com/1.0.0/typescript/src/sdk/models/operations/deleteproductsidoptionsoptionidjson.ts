import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class DeleteProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsIdOptionsOptionIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsIdOptionsOptionIdJsonQueryParams;
}


export class DeleteProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProductsIdOptionsOptionIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
