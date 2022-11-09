import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccountSettingsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateAccountSettingsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateAccountSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateAccountSettingsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateAccountSettingsSecurityOption2;
}


export class UpdateAccountSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccountSettings;

  @Metadata()
  security: UpdateAccountSettingsSecurity;
}


export class UpdateAccountSettingsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  accountSettings?: shared.AccountSettings;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAccountSettingsDefaultApplicationJsonObject?: UpdateAccountSettingsDefaultApplicationJson;
}
