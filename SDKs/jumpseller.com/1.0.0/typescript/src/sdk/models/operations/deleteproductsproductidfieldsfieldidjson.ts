import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsProductIdFieldsFieldIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: number;
}


export class DeleteProductsProductIdFieldsFieldIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsProductIdFieldsFieldIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsProductIdFieldsFieldIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsProductIdFieldsFieldIdJsonQueryParams;
}


export class DeleteProductsProductIdFieldsFieldIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageObject?: any;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
