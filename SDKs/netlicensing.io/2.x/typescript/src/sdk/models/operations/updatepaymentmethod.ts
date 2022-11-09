import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePaymentMethodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodNumber" })
  paymentMethodNumber: string;
}


export class UpdatePaymentMethodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=paypal.subject;" })
  paypalSubject?: string;
}


export class UpdatePaymentMethodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdatePaymentMethodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePaymentMethodPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePaymentMethodRequestBody;

  @Metadata()
  security: UpdatePaymentMethodSecurity;
}


export class UpdatePaymentMethodResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
