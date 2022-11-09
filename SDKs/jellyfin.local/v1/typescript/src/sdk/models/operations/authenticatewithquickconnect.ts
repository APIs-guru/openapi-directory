import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticateWithQuickConnectRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  quickConnectDto?: shared.QuickConnectDto;

  @Metadata({ data: "request, media_type=application/json" })
  quickConnectDto1?: shared.QuickConnectDto;

  @Metadata({ data: "request, media_type=text/json" })
  quickConnectDto2?: shared.QuickConnectDto;
}


export class AuthenticateWithQuickConnectRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthenticateWithQuickConnectRequests;
}


export class AuthenticateWithQuickConnectResponse extends SpeakeasyBase {
  @Metadata()
  authenticationResult?: shared.AuthenticationResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
