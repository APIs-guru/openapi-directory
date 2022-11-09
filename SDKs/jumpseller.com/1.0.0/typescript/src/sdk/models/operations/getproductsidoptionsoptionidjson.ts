import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class GetProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsOptionIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsOptionIdJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  productOption?: shared.ProductOption;

  @Metadata()
  statusCode: number;
}
