import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdDigitalProductsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdDigitalProductsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdDigitalProductsJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdDigitalProductsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DigitalProductEdit;
}


export class PostProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  digitalProduct?: shared.DigitalProduct;

  @Metadata()
  statusCode: number;
}
