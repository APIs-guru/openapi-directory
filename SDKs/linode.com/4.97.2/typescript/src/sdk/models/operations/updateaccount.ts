import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateAccountSecurityOption2;
}


export class UpdateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Account;

  @Metadata()
  security: UpdateAccountSecurity;
}


export class UpdateAccountDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateAccountResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAccountDefaultApplicationJsonObject?: UpdateAccountDefaultApplicationJson;
}
