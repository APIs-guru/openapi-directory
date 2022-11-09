import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class DeleteProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdImagesImageIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdImagesImageIdJsonQueryParams;
}


export class DeleteProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdImagesImageIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
