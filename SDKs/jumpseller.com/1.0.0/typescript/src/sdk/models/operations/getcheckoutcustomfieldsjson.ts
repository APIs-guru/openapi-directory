import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCheckoutCustomFieldsJsonQueryParams;
}


export class GetCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CheckoutCustomField })
  checkoutCustomFields?: shared.CheckoutCustomField[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
