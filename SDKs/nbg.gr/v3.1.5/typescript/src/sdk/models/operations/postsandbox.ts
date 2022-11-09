import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSandboxRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  sandboxRequest?: shared.SandboxRequest;

  @Metadata({ data: "request, media_type=application/json" })
  sandboxRequest1?: shared.SandboxRequest;
}


export class PostSandboxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PostSandboxRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSandboxRequests;

  @Metadata()
  security: PostSandboxSecurity;
}


export class PostSandboxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  sandbox?: shared.Sandbox;

  @Metadata()
  statusCode: number;
}
