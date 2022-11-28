import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ForgotPasswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  forgotPasswordDto?: shared.ForgotPasswordDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  forgotPasswordDto1?: shared.ForgotPasswordDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  forgotPasswordDto2?: shared.ForgotPasswordDto;
}


export class ForgotPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ForgotPasswordRequests;
}


export class ForgotPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forgotPasswordResult?: shared.ForgotPasswordResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
