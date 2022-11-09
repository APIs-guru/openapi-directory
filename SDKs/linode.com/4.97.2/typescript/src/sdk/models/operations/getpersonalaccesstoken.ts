import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonalAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class GetPersonalAccessTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetPersonalAccessTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPersonalAccessTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPersonalAccessTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPersonalAccessTokenSecurityOption2;
}


export class GetPersonalAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPersonalAccessTokenPathParams;

  @Metadata()
  security: GetPersonalAccessTokenSecurity;
}


export class GetPersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPersonalAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalAccessToken?: shared.PersonalAccessToken;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPersonalAccessTokenDefaultApplicationJsonObject?: GetPersonalAccessTokenDefaultApplicationJson;
}
