import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductsIdImagesJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdImagesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdImagesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProductsIdImagesJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostProductsIdImagesJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImageEdit;
}


export class PostProductsIdImagesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  image?: shared.Image;

  @SpeakeasyMetadata()
  statusCode: number;
}
