import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: number;
}


export class DeleteProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsProductIdFieldsFieldIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsProductIdFieldsFieldIdJsonQueryParams;
}


export class DeleteProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageObject?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
