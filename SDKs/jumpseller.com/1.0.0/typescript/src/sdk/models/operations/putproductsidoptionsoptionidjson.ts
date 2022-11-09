import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class PutProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsIdOptionsOptionIdJsonPathParams;

  @Metadata()
  queryParams: PutProductsIdOptionsOptionIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductOptionEdit;
}


export class PutProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  productOption?: shared.ProductOption;

  @Metadata()
  statusCode: number;
}
