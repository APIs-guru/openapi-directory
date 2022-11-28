import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateManagedLinodeSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateManagedLinodeSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedLinodeSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateManagedLinodeSettingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagedLinodeSettingsInput;

  @SpeakeasyMetadata()
  security: UpdateManagedLinodeSettingSecurity;
}


export class UpdateManagedLinodeSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedLinodeSettings?: shared.ManagedLinodeSettings;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateManagedLinodeSettingDefaultApplicationJsonObject?: UpdateManagedLinodeSettingDefaultApplicationJson;
}
