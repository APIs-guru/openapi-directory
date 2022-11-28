import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserPasswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateUserPassword?: shared.UpdateUserPassword;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateUserPassword1?: shared.UpdateUserPassword;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateUserPassword2?: shared.UpdateUserPassword;
}


export class UpdateUserPasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPasswordPathParams;

  @SpeakeasyMetadata()
  request: UpdateUserPasswordRequests;

  @SpeakeasyMetadata()
  security: UpdateUserPasswordSecurity;
}


export class UpdateUserPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
