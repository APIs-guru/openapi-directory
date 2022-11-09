import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateManagedLinodeSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateManagedLinodeSettingSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateManagedLinodeSettingSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateManagedLinodeSettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateManagedLinodeSettingSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateManagedLinodeSettingSecurityOption2;
}


export class UpdateManagedLinodeSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateManagedLinodeSettingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagedLinodeSettings;

  @Metadata()
  security: UpdateManagedLinodeSettingSecurity;
}


export class UpdateManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedLinodeSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedLinodeSettings?: shared.ManagedLinodeSettings;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateManagedLinodeSettingDefaultApplicationJsonObject?: UpdateManagedLinodeSettingDefaultApplicationJson;
}
