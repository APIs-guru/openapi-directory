import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePersonalAccessTokenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreatePersonalAccessTokenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreatePersonalAccessTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreatePersonalAccessTokenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreatePersonalAccessTokenSecurityOption2;
}


export class CreatePersonalAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: CreatePersonalAccessTokenSecurity;
}


export class CreatePersonalAccessTokenDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreatePersonalAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalAccessToken?: shared.PersonalAccessToken;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPersonalAccessTokenDefaultApplicationJsonObject?: CreatePersonalAccessTokenDefaultApplicationJson;
}
