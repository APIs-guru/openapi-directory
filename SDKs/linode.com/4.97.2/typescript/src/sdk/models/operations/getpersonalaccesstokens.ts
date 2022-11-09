import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonalAccessTokensSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetPersonalAccessTokensSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPersonalAccessTokensSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPersonalAccessTokensSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPersonalAccessTokensSecurityOption2;
}


export class GetPersonalAccessTokensRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPersonalAccessTokensSecurity;
}


export class GetPersonalAccessTokens200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PersonalAccessToken })
  data?: shared.PersonalAccessToken[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetPersonalAccessTokensDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetPersonalAccessTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPersonalAccessTokens200ApplicationJsonObject?: GetPersonalAccessTokens200ApplicationJson;

  @Metadata()
  getPersonalAccessTokensDefaultApplicationJsonObject?: GetPersonalAccessTokensDefaultApplicationJson;
}
