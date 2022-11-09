import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class AuthenticateUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pw" })
  pw: string;
}


export class AuthenticateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthenticateUserPathParams;

  @Metadata()
  queryParams: AuthenticateUserQueryParams;
}


export class AuthenticateUserResponse extends SpeakeasyBase {
  @Metadata()
  authenticationResult?: shared.AuthenticationResult;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
