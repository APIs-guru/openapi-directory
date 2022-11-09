import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrateLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class MigrateLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class MigrateLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class MigrateLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: MigrateLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: MigrateLinodeInstanceSecurityOption2;
}


export class MigrateLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrateLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: MigrateLinodeInstanceSecurity;
}


export class MigrateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class MigrateLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  migrateLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  migrateLinodeInstanceDefaultApplicationJsonObject?: MigrateLinodeInstanceDefaultApplicationJson;
}
