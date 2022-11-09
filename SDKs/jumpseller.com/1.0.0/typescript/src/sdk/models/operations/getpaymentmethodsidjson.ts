import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentMethodsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPaymentMethodsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPaymentMethodsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentMethodsIdJsonPathParams;

  @Metadata()
  queryParams: GetPaymentMethodsIdJsonQueryParams;
}


export class GetPaymentMethodsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  paymentMethod?: shared.PaymentMethod;

  @Metadata()
  statusCode: number;
}
