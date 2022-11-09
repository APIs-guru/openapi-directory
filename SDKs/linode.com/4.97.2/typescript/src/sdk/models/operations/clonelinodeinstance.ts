import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CloneLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @Metadata({ data: "json, name=configs" })
  configs?: number[];

  @Metadata({ data: "json, name=disks" })
  disks?: number[];

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CloneLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CloneLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CloneLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloneLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloneLinodeInstanceSecurityOption2;
}


export class CloneLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneLinodeInstanceRequestBody;

  @Metadata()
  security: CloneLinodeInstanceSecurity;
}


export class CloneLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linode?: shared.Linode;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneLinodeInstanceDefaultApplicationJsonObject?: CloneLinodeInstanceDefaultApplicationJson;
}
