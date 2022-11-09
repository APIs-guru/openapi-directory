import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSandboxSandboxIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sandboxId" })
  sandboxId: string;
}


export class GetSandboxSandboxIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetSandboxSandboxIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSandboxSandboxIdPathParams;

  @Metadata()
  security: GetSandboxSandboxIdSecurity;
}


export class GetSandboxSandboxIdResponse extends SpeakeasyBase {
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
