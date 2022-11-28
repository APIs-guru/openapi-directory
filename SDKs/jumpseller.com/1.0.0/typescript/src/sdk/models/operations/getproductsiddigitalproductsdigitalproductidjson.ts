import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsIdDigitalProductsDigitalProductIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digital_product_id" })
  digitalProductId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsIdDigitalProductsDigitalProductIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}


export class GetProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  digitalProduct?: shared.DigitalProduct;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
