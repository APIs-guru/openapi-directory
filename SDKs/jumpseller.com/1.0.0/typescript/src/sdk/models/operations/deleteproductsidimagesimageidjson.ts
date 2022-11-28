import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class DeleteProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsIdImagesImageIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsIdImagesImageIdJsonQueryParams;
}


export class DeleteProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProductsIdImagesImageIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
