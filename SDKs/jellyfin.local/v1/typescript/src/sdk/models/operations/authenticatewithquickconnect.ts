import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticateWithQuickConnectRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  quickConnectDto?: shared.QuickConnectDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  quickConnectDto1?: shared.QuickConnectDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  quickConnectDto2?: shared.QuickConnectDto;
}


export class AuthenticateWithQuickConnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthenticateWithQuickConnectRequests;
}


export class AuthenticateWithQuickConnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationResult?: shared.AuthenticationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
