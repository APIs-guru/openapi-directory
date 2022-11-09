import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdOptionsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdOptionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsJsonQueryParams;
}


export class GetProductsIdOptionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.ProductOption })
  productOptions?: shared.ProductOption[];

  @Metadata()
  statusCode: number;
}
