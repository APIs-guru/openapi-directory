import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCheckoutCustomFieldsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CheckoutCustomFieldEdit;
}


export class PostCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
  @Metadata()
  checkoutCustomField?: shared.CheckoutCustomField;

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
