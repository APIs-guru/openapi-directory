import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class GetProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdImagesImageIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdImagesImageIdJsonQueryParams;
}


export class GetProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  image?: shared.Image;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
