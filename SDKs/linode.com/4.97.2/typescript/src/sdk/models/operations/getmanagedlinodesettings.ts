import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedLinodeSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetManagedLinodeSettingsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedLinodeSettingsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedLinodeSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedLinodeSettingsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedLinodeSettingsSecurityOption2;
}


export class GetManagedLinodeSettingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetManagedLinodeSettingsQueryParams;

  @Metadata()
  security: GetManagedLinodeSettingsSecurity;
}


export class GetManagedLinodeSettings200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ManagedLinodeSettings })
  data?: shared.ManagedLinodeSettings[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedLinodeSettingsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedLinodeSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedLinodeSettings200ApplicationJsonObject?: GetManagedLinodeSettings200ApplicationJson;

  @Metadata()
  getManagedLinodeSettingsDefaultApplicationJsonObject?: GetManagedLinodeSettingsDefaultApplicationJson;
}
