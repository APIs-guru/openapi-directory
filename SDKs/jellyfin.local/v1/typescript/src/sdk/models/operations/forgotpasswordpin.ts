import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ForgotPasswordPinRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  string?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  string1?: string;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  string2?: string;
}


export class ForgotPasswordPinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ForgotPasswordPinRequests;
}


export class ForgotPasswordPinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pinRedeemResult?: shared.PinRedeemResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
