import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePersonalAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenId" })
  tokenId: number;
}


export class UpdatePersonalAccessTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdatePersonalAccessTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdatePersonalAccessTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdatePersonalAccessTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdatePersonalAccessTokenSecurityOption2;
}


export class UpdatePersonalAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePersonalAccessTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PersonalAccessToken;

  @Metadata()
  security: UpdatePersonalAccessTokenSecurity;
}


export class UpdatePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdatePersonalAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalAccessToken?: shared.PersonalAccessToken;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePersonalAccessTokenDefaultApplicationJsonObject?: UpdatePersonalAccessTokenDefaultApplicationJson;
}
