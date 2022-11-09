import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLinodeConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateLinodeConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateLinodeConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateLinodeConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateLinodeConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateLinodeConfigSecurityOption2;
}


export class UpdateLinodeConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLinodeConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: UpdateLinodeConfigSecurity;
}


export class UpdateLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLinodeConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeConfig?: shared.LinodeConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLinodeConfigDefaultApplicationJsonObject?: UpdateLinodeConfigDefaultApplicationJson;
}
