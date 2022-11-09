import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdDigitalProductsDigitalProductIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=digital_product_id" })
  digitalProductId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdDigitalProductsDigitalProductIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  digitalProduct?: shared.DigitalProduct;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
