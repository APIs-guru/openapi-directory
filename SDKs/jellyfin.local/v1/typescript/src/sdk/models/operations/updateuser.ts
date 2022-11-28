import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userDto?: shared.UserDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userDto1?: shared.UserDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userDto2?: shared.UserDtoInput;
}


export class UpdateUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPathParams;

  @SpeakeasyMetadata()
  request: UpdateUserRequestsInput;

  @SpeakeasyMetadata()
  security: UpdateUserSecurity;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
