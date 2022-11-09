import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProfileAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class DeleteProfileAppSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteProfileAppSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteProfileAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteProfileAppSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteProfileAppSecurityOption2;
}


export class DeleteProfileAppRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProfileAppPathParams;

  @Metadata()
  security: DeleteProfileAppSecurity;
}


export class DeleteProfileAppDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteProfileAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteProfileApp200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteProfileAppDefaultApplicationJsonObject?: DeleteProfileAppDefaultApplicationJson;
}
