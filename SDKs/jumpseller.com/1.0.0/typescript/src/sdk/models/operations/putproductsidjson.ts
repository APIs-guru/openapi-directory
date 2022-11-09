import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutProductsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsIdJsonPathParams;

  @Metadata()
  queryParams: PutProductsIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductEdit;
}


export class PutProductsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  product?: shared.Product;

  @Metadata()
  statusCode: number;
}
