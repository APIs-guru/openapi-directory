import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: number;
}


export class PutProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProductsProductIdFieldsFieldIdJsonPathParams;

  @Metadata()
  queryParams: PutProductsProductIdFieldsFieldIdJsonQueryParams;
}


export class PutProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  productCustomField?: shared.ProductCustomField;

  @Metadata()
  statusCode: number;
}
