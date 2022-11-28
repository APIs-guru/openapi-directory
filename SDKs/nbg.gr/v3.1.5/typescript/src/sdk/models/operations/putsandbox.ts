import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSandboxRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sandbox?: shared.Sandbox;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sandbox1?: shared.Sandbox;
}


export class PutSandboxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PutSandboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PutSandboxRequests;

  @SpeakeasyMetadata()
  security: PutSandboxSecurity;
}


export class PutSandboxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
