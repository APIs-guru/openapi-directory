import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetManagedLinodeSettingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetManagedLinodeSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetManagedLinodeSettings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ManagedLinodeSettings })
  data?: shared.ManagedLinodeSettings[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedLinodeSettingsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedLinodeSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetManagedLinodeSettingsQueryParams;

  @SpeakeasyMetadata()
  security: GetManagedLinodeSettingsSecurity;
}


export class GetManagedLinodeSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getManagedLinodeSettings200ApplicationJsonObject?: GetManagedLinodeSettings200ApplicationJson;

  @SpeakeasyMetadata()
  getManagedLinodeSettingsDefaultApplicationJsonObject?: GetManagedLinodeSettingsDefaultApplicationJson;
}
