import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentMethodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodNumber" })
  paymentMethodNumber: string;
}


export class GetPaymentMethodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetPaymentMethodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentMethodPathParams;

  @Metadata()
  security: GetPaymentMethodSecurity;
}


export class GetPaymentMethodResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
