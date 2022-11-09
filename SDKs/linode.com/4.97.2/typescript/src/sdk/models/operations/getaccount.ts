import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAccountSecurityOption2;
}


export class GetAccountRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAccountSecurity;
}


export class GetAccountDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAccountDefaultApplicationJsonObject?: GetAccountDefaultApplicationJson;
}
