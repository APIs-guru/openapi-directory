import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserEasyPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserEasyPasswordRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateUserEasyPassword?: shared.UpdateUserEasyPassword;

  @Metadata({ data: "request, media_type=application/json" })
  updateUserEasyPassword1?: shared.UpdateUserEasyPassword;

  @Metadata({ data: "request, media_type=text/json" })
  updateUserEasyPassword2?: shared.UpdateUserEasyPassword;
}


export class UpdateUserEasyPasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserEasyPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserEasyPasswordPathParams;

  @Metadata()
  request: UpdateUserEasyPasswordRequests;

  @Metadata()
  security: UpdateUserEasyPasswordSecurity;
}


export class UpdateUserEasyPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
