import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePaymentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreatePaymentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreatePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreatePaymentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreatePaymentSecurityOption2;
}


export class CreatePaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentRequest;

  @Metadata()
  security: CreatePaymentSecurity;
}


export class CreatePaymentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payment?: shared.Payment;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPaymentDefaultApplicationJsonObject?: CreatePaymentDefaultApplicationJson;
}
