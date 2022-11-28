import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticateUserByNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  authenticateUserByName?: shared.AuthenticateUserByName;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  authenticateUserByName1?: shared.AuthenticateUserByName;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  authenticateUserByName2?: shared.AuthenticateUserByName;
}


export class AuthenticateUserByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthenticateUserByNameRequests;
}


export class AuthenticateUserByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationResult?: shared.AuthenticationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
