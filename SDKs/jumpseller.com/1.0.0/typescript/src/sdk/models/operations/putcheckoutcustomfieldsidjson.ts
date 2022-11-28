import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCheckoutCustomFieldsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCheckoutCustomFieldsIdJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckoutCustomFieldEdit;
}


export class PutCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutCustomField?: shared.CheckoutCustomField;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
