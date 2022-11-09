import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeConfigSecurityOption2;
}


export class GetLinodeConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeConfigPathParams;

  @Metadata()
  security: GetLinodeConfigSecurity;
}


export class GetLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeConfig?: shared.LinodeConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeConfigDefaultApplicationJsonObject?: GetLinodeConfigDefaultApplicationJson;
}
