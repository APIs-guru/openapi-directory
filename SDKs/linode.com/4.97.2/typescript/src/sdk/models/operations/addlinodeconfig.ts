import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLinodeConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AddLinodeConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddLinodeConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AddLinodeConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AddLinodeConfigSecurityOption2;
}


export class AddLinodeConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddLinodeConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LinodeConfig;

  @Metadata()
  security: AddLinodeConfigSecurity;
}


export class AddLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeConfig?: shared.LinodeConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  addLinodeConfigDefaultApplicationJsonObject?: AddLinodeConfigDefaultApplicationJson;
}
