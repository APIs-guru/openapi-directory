import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCheckoutCustomFieldsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CheckoutCustomFieldEdit;
}


export class PostCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutCustomField?: shared.CheckoutCustomField;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
