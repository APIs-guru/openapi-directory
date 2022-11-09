import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userDto?: shared.UserDto;

  @Metadata({ data: "request, media_type=application/json" })
  userDto1?: shared.UserDto;

  @Metadata({ data: "request, media_type=text/json" })
  userDto2?: shared.UserDto;
}


export class UpdateUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserPathParams;

  @Metadata()
  request: UpdateUserRequests;

  @Metadata()
  security: UpdateUserSecurity;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
