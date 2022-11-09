import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountLoginsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetAccountLoginsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetAccountLoginsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAccountLoginsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAccountLoginsSecurityOption2;
}


export class GetAccountLoginsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAccountLoginsSecurity;
}


export class GetAccountLogins200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Login })
  data?: shared.Login[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetAccountLoginsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountLoginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAccountLogins200ApplicationJsonObject?: GetAccountLogins200ApplicationJson;

  @Metadata()
  getAccountLoginsDefaultApplicationJsonObject?: GetAccountLoginsDefaultApplicationJson;
}
