import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePayPalPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreatePayPalPayment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkout_token" })
  checkoutToken?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId?: string;
}


export class CreatePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePayPalPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayPal;

  @SpeakeasyMetadata()
  security: CreatePayPalPaymentSecurity;
}


export class CreatePayPalPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPayPalPayment200ApplicationJsonObject?: CreatePayPalPayment200ApplicationJson;

  @SpeakeasyMetadata()
  createPayPalPaymentDefaultApplicationJsonObject?: CreatePayPalPaymentDefaultApplicationJson;
}
