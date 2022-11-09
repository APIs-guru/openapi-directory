import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedLinodeSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetManagedLinodeSettingSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedLinodeSettingSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedLinodeSettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedLinodeSettingSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedLinodeSettingSecurityOption2;
}


export class GetManagedLinodeSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetManagedLinodeSettingPathParams;

  @Metadata()
  security: GetManagedLinodeSettingSecurity;
}


export class GetManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedLinodeSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedLinodeSettings?: shared.ManagedLinodeSettings;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedLinodeSettingDefaultApplicationJsonObject?: GetManagedLinodeSettingDefaultApplicationJson;
}
