import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSandboxSandboxIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sandboxId" })
  sandboxId: string;
}


export class GetSandboxSandboxIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  authorizationCodeToken: shared.SchemeAuthorizationCodeToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GetSandboxSandboxIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSandboxSandboxIdPathParams;

  @SpeakeasyMetadata()
  security: GetSandboxSandboxIdSecurity;
}


export class GetSandboxSandboxIdResponse extends SpeakeasyBase {
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
