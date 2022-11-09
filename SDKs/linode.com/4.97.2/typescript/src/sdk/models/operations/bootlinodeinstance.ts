import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BootLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class BootLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=config_id" })
  configId?: number;
}


export class BootLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class BootLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class BootLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BootLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BootLinodeInstanceSecurityOption2;
}


export class BootLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BootLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BootLinodeInstanceRequestBody;

  @Metadata()
  security: BootLinodeInstanceSecurity;
}


export class BootLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class BootLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bootLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  bootLinodeInstanceDefaultApplicationJsonObject?: BootLinodeInstanceDefaultApplicationJson;
}
