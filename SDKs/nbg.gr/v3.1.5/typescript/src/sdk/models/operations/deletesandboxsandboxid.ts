import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSandboxSandboxIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sandboxId" })
  sandboxId: string;
}


export class DeleteSandboxSandboxIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class DeleteSandboxSandboxIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSandboxSandboxIdPathParams;

  @Metadata()
  security: DeleteSandboxSandboxIdSecurity;
}


export class DeleteSandboxSandboxIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
