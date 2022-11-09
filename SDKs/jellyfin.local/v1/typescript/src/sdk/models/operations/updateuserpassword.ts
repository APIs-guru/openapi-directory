import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserPasswordRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateUserPassword?: shared.UpdateUserPassword;

  @Metadata({ data: "request, media_type=application/json" })
  updateUserPassword1?: shared.UpdateUserPassword;

  @Metadata({ data: "request, media_type=text/json" })
  updateUserPassword2?: shared.UpdateUserPassword;
}


export class UpdateUserPasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserPasswordPathParams;

  @Metadata()
  request: UpdateUserPasswordRequests;

  @Metadata()
  security: UpdateUserPasswordSecurity;
}


export class UpdateUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
