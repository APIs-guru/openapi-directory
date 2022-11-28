import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UpdateUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateUserDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UserInput;

  @SpeakeasyMetadata()
  security: UpdateUserSecurity;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;

  @SpeakeasyMetadata()
  updateUserDefaultApplicationJsonObject?: UpdateUserDefaultApplicationJson;
}
