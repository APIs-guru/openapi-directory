import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdImagesJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdImagesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdImagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdImagesJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdImagesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImageEdit;
}


export class PostProductsIdImagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  image?: shared.Image;

  @Metadata()
  statusCode: number;
}
