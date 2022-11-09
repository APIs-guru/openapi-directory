import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentMethodsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPaymentMethodsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPaymentMethodsJsonQueryParams;
}


export class GetPaymentMethodsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PaymentMethod })
  paymentMethods?: shared.PaymentMethod[];

  @Metadata()
  statusCode: number;
}
