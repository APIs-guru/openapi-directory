import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileLoginsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileLoginsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileLoginsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileLoginsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileLoginsSecurityOption2;
}


export class GetProfileLoginsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProfileLoginsSecurity;
}


export class GetProfileLogins200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Login })
  data?: shared.Login[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetProfileLoginsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileLoginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileLogins200ApplicationJsonObject?: GetProfileLogins200ApplicationJson;

  @Metadata()
  getProfileLoginsDefaultApplicationJsonObject?: GetProfileLoginsDefaultApplicationJson;
}
