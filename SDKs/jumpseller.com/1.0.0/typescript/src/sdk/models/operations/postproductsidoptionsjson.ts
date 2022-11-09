import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdOptionsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdOptionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdOptionsJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdOptionsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionEdit;
}


export class PostProductsIdOptionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOption?: shared.ProductOption;

  @Metadata()
  statusCode: number;
}
