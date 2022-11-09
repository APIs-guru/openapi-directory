import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePayPalPaymentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreatePayPalPaymentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreatePayPalPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreatePayPalPaymentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreatePayPalPaymentSecurityOption2;
}


export class CreatePayPalPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayPal;

  @Metadata()
  security: CreatePayPalPaymentSecurity;
}


export class CreatePayPalPayment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout_token" })
  checkoutToken?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;
}


export class CreatePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePayPalPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPayPalPayment200ApplicationJsonObject?: CreatePayPalPayment200ApplicationJson;

  @Metadata()
  createPayPalPaymentDefaultApplicationJsonObject?: CreatePayPalPaymentDefaultApplicationJson;
}
