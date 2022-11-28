import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: number;
}


export class PutProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProductsProductIdFieldsFieldIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutProductsProductIdFieldsFieldIdJsonQueryParams;
}


export class PutProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  productCustomField?: shared.ProductCustomField;

  @SpeakeasyMetadata()
  statusCode: number;
}
