import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLinodeConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class DeleteLinodeConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLinodeConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLinodeConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLinodeConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLinodeConfigSecurityOption2;
}


export class DeleteLinodeConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLinodeConfigPathParams;

  @Metadata()
  security: DeleteLinodeConfigSecurity;
}


export class DeleteLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLinodeConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLinodeConfig200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLinodeConfigDefaultApplicationJsonObject?: DeleteLinodeConfigDefaultApplicationJson;
}
