import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ForgotPasswordPinRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  string?: string;

  @Metadata({ data: "request, media_type=application/json" })
  string1?: string;

  @Metadata({ data: "request, media_type=text/json" })
  string2?: string;
}


export class ForgotPasswordPinRequest extends SpeakeasyBase {
  @Metadata()
  request?: ForgotPasswordPinRequests;
}


export class ForgotPasswordPinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pinRedeemResult?: shared.PinRedeemResult;

  @Metadata()
  statusCode: number;
}
