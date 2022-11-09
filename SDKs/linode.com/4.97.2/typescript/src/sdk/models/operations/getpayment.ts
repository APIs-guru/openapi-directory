import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: number;
}


export class GetPaymentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetPaymentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPaymentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPaymentSecurityOption2;
}


export class GetPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentPathParams;

  @Metadata()
  security: GetPaymentSecurity;
}


export class GetPaymentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payment?: shared.Payment;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPaymentDefaultApplicationJsonObject?: GetPaymentDefaultApplicationJson;
}
