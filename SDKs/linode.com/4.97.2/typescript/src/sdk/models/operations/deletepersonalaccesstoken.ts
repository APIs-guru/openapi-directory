import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePersonalAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class DeletePersonalAccessTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeletePersonalAccessTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeletePersonalAccessTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeletePersonalAccessTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeletePersonalAccessTokenSecurityOption2;
}


export class DeletePersonalAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePersonalAccessTokenPathParams;

  @Metadata()
  security: DeletePersonalAccessTokenSecurity;
}


export class DeletePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeletePersonalAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deletePersonalAccessToken200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deletePersonalAccessTokenDefaultApplicationJsonObject?: DeletePersonalAccessTokenDefaultApplicationJson;
}
