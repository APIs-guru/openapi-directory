import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangePasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ChangePasswordRequestBodyNewPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ChangePasswordRequestBodyOldPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ChangePasswordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=newPassword" })
  newPassword?: ChangePasswordRequestBodyNewPassword;

  @Metadata({ data: "json, name=oldPassword" })
  oldPassword?: ChangePasswordRequestBodyOldPassword;
}


export class ChangePasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangePasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChangePasswordRequestBody;
}


export class ChangePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
