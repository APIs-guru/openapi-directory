import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserEasyPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserEasyPasswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateUserEasyPassword?: shared.UpdateUserEasyPassword;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateUserEasyPassword1?: shared.UpdateUserEasyPassword;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateUserEasyPassword2?: shared.UpdateUserEasyPassword;
}


export class UpdateUserEasyPasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserEasyPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserEasyPasswordPathParams;

  @SpeakeasyMetadata()
  request: UpdateUserEasyPasswordRequests;

  @SpeakeasyMetadata()
  security: UpdateUserEasyPasswordSecurity;
}


export class UpdateUserEasyPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
