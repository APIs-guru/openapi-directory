import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCheckoutCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCheckoutCustomFieldsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCheckoutCustomFieldsJsonQueryParams;
}


export class GetCheckoutCustomFieldsJsonResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.CheckoutCustomField })
  checkoutCustomFields?: shared.CheckoutCustomField[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
