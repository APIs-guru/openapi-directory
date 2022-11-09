import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResizeLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ResizeLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_auto_disk_resize" })
  allowAutoDiskResize?: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class ResizeLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResizeLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResizeLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResizeLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResizeLinodeInstanceSecurityOption2;
}


export class ResizeLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResizeLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ResizeLinodeInstanceRequestBody;

  @Metadata()
  security: ResizeLinodeInstanceSecurity;
}


export class ResizeLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResizeLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resizeLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  resizeLinodeInstanceDefaultApplicationJsonObject?: ResizeLinodeInstanceDefaultApplicationJson;
}
