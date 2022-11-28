import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: number;
}


export class GetPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetPaymentDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentSecurity;
}


export class GetPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payment?: shared.Payment;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPaymentDefaultApplicationJsonObject?: GetPaymentDefaultApplicationJson;
}
