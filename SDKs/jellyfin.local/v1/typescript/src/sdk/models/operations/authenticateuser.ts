import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class AuthenticateUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pw" })
  pw: string;
}


export class AuthenticateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthenticateUserPathParams;

  @SpeakeasyMetadata()
  queryParams: AuthenticateUserQueryParams;
}


export class AuthenticateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationResult?: shared.AuthenticationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
