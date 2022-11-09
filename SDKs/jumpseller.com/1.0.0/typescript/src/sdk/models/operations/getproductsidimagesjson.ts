import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdImagesJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdImagesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdImagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdImagesJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdImagesJsonQueryParams;
}


export class GetProductsIdImagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Image })
  images?: shared.Image[];

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
