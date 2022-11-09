import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetLinodePasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ResetLinodePasswordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResetLinodePasswordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResetLinodePasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResetLinodePasswordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResetLinodePasswordSecurityOption2;
}


export class ResetLinodePasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetLinodePasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: ResetLinodePasswordSecurity;
}


export class ResetLinodePasswordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResetLinodePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resetLinodePassword200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  resetLinodePasswordDefaultApplicationJsonObject?: ResetLinodePasswordDefaultApplicationJson;
}
