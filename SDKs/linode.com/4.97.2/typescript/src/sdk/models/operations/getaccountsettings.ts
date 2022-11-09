import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountSettingsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetAccountSettingsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetAccountSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAccountSettingsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAccountSettingsSecurityOption2;
}


export class GetAccountSettingsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAccountSettingsSecurity;
}


export class GetAccountSettingsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  accountSettings?: shared.AccountSettings;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAccountSettingsDefaultApplicationJsonObject?: GetAccountSettingsDefaultApplicationJson;
}
