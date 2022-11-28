import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetManagedLinodeSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetManagedLinodeSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedLinodeSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetManagedLinodeSettingPathParams;

  @SpeakeasyMetadata()
  security: GetManagedLinodeSettingSecurity;
}


export class GetManagedLinodeSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedLinodeSettings?: shared.ManagedLinodeSettings;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getManagedLinodeSettingDefaultApplicationJsonObject?: GetManagedLinodeSettingDefaultApplicationJson;
}
