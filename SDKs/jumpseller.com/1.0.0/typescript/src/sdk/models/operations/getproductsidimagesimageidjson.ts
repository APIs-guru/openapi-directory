import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdImagesImageIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class GetProductsIdImagesImageIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdImagesImageIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdImagesImageIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdImagesImageIdJsonQueryParams;
}


export class GetProductsIdImagesImageIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  image?: shared.Image;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
