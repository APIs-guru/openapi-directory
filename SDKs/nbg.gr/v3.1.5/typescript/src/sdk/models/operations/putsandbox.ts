import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSandboxRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  sandbox?: shared.Sandbox;

  @Metadata({ data: "request, media_type=application/json" })
  sandbox1?: shared.Sandbox;
}


export class PutSandboxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PutSandboxRequest extends SpeakeasyBase {
  @Metadata()
  request?: PutSandboxRequests;

  @Metadata()
  security: PutSandboxSecurity;
}


export class PutSandboxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
