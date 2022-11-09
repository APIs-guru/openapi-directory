import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostProductsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductEdit;
}


export class PostProductsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  product?: shared.Product;

  @Metadata()
  statusCode: number;
}
