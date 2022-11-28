import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentMethodsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPaymentMethodsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPaymentMethodsJsonQueryParams;
}


export class GetPaymentMethodsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PaymentMethod })
  paymentMethods?: shared.PaymentMethod[];

  @SpeakeasyMetadata()
  statusCode: number;
}
