import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCheckoutCustomFieldsIdJsonPathParams;

  @Metadata()
  queryParams: GetCheckoutCustomFieldsIdJsonQueryParams;
}


export class GetCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  checkoutCustomField?: shared.CheckoutCustomField;

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
