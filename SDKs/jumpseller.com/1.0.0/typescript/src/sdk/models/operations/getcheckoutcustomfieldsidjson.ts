import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCheckoutCustomFieldsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCheckoutCustomFieldsIdJsonQueryParams;
}


export class GetCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutCustomField?: shared.CheckoutCustomField;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
