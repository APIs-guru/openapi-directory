import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetAccountSettingsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAccountSettingsSecurity;
}


export class GetAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountSettings?: shared.AccountSettings;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccountSettingsDefaultApplicationJsonObject?: GetAccountSettingsDefaultApplicationJson;
}
