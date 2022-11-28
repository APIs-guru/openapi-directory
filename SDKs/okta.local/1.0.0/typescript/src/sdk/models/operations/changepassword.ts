import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangePasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ChangePasswordRequestBodyNewPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ChangePasswordRequestBodyOldPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ChangePasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword?: ChangePasswordRequestBodyNewPassword;

  @SpeakeasyMetadata({ data: "json, name=oldPassword" })
  oldPassword?: ChangePasswordRequestBodyOldPassword;
}


export class ChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangePasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChangePasswordRequestBody;
}


export class ChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
