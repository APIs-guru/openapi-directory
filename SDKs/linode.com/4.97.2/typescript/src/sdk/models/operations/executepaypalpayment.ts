import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecutePayPalPaymentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ExecutePayPalPaymentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ExecutePayPalPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ExecutePayPalPaymentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ExecutePayPalPaymentSecurityOption2;
}


export class ExecutePayPalPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayPalExecute;

  @Metadata()
  security: ExecutePayPalPaymentSecurity;
}


export class ExecutePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ExecutePayPalPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  executePayPalPayment200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  executePayPalPaymentDefaultApplicationJsonObject?: ExecutePayPalPaymentDefaultApplicationJson;
}
