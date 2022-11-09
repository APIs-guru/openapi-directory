import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RebuildLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RebuildLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @Metadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @Metadata({ data: "json, name=booted" })
  booted?: boolean;

  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=root_pass" })
  rootPass: string;

  @Metadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @Metadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;
}


export class RebuildLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RebuildLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RebuildLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RebuildLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RebuildLinodeInstanceSecurityOption2;
}


export class RebuildLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RebuildLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RebuildLinodeInstanceRequestBody;

  @Metadata()
  security: RebuildLinodeInstanceSecurity;
}


export class RebuildLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RebuildLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linode?: shared.Linode;

  @Metadata()
  statusCode: number;

  @Metadata()
  rebuildLinodeInstanceDefaultApplicationJsonObject?: RebuildLinodeInstanceDefaultApplicationJson;
}
