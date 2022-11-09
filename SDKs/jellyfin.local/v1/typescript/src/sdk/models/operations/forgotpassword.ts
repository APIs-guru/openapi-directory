import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ForgotPasswordRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  forgotPasswordDto?: shared.ForgotPasswordDto;

  @Metadata({ data: "request, media_type=application/json" })
  forgotPasswordDto1?: shared.ForgotPasswordDto;

  @Metadata({ data: "request, media_type=text/json" })
  forgotPasswordDto2?: shared.ForgotPasswordDto;
}


export class ForgotPasswordRequest extends SpeakeasyBase {
  @Metadata()
  request: ForgotPasswordRequests;
}


export class ForgotPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  forgotPasswordResult?: shared.ForgotPasswordResult;

  @Metadata()
  statusCode: number;
}
