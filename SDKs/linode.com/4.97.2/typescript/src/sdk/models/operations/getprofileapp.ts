import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetProfileAppSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileAppSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileAppSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileAppSecurityOption2;
}


export class GetProfileAppRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProfileAppPathParams;

  @Metadata()
  security: GetProfileAppSecurity;
}


export class GetProfileAppDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileAppResponse extends SpeakeasyBase {
  @Metadata()
  authorizedApp?: shared.AuthorizedApp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileAppDefaultApplicationJsonObject?: GetProfileAppDefaultApplicationJson;
}
