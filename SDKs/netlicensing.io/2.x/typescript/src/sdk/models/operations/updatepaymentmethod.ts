import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePaymentMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodNumber" })
  paymentMethodNumber: string;
}


export class UpdatePaymentMethodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=paypal.subject;" })
  paypalSubject?: string;
}


export class UpdatePaymentMethodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdatePaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePaymentMethodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePaymentMethodRequestBody;

  @SpeakeasyMetadata()
  security: UpdatePaymentMethodSecurity;
}


export class UpdatePaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
