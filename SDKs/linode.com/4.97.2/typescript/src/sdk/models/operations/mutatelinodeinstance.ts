import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MutateLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class MutateLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_auto_disk_resize" })
  allowAutoDiskResize?: boolean;
}


export class MutateLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class MutateLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class MutateLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MutateLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MutateLinodeInstanceSecurityOption2;
}


export class MutateLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MutateLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MutateLinodeInstanceRequestBody;

  @Metadata()
  security: MutateLinodeInstanceSecurity;
}


export class MutateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class MutateLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mutateLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  mutateLinodeInstanceDefaultApplicationJsonObject?: MutateLinodeInstanceDefaultApplicationJson;
}
