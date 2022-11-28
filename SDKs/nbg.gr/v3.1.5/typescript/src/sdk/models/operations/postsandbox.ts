import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSandboxRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sandboxRequest?: shared.SandboxRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sandboxRequest1?: shared.SandboxRequest;
}


export class PostSandboxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PostSandboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSandboxRequests;

  @SpeakeasyMetadata()
  security: PostSandboxSecurity;
}


export class PostSandboxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  sandbox?: shared.Sandbox;

  @SpeakeasyMetadata()
  statusCode: number;
}
