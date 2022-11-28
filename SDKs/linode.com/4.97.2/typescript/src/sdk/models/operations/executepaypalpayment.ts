import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecutePayPalPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ExecutePayPalPaymentDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ExecutePayPalPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayPalExecute;

  @SpeakeasyMetadata()
  security: ExecutePayPalPaymentSecurity;
}


export class ExecutePayPalPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  executePayPalPayment200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  executePayPalPaymentDefaultApplicationJsonObject?: ExecutePayPalPaymentDefaultApplicationJson;
}
