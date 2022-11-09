import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticateUserByNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  authenticateUserByName?: shared.AuthenticateUserByName;

  @Metadata({ data: "request, media_type=application/json" })
  authenticateUserByName1?: shared.AuthenticateUserByName;

  @Metadata({ data: "request, media_type=text/json" })
  authenticateUserByName2?: shared.AuthenticateUserByName;
}


export class AuthenticateUserByNameRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthenticateUserByNameRequests;
}


export class AuthenticateUserByNameResponse extends SpeakeasyBase {
  @Metadata()
  authenticationResult?: shared.AuthenticationResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
