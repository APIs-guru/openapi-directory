import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @Metadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @Metadata({ data: "json, name=backup_id" })
  backupId?: number;

  @Metadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @Metadata({ data: "json, name=booted" })
  booted?: boolean;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=interfaces", elemType: shared.LinodeConfigInterface })
  interfaces?: shared.LinodeConfigInterface[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=private_ip" })
  privateIp?: boolean;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=root_pass" })
  rootPass?: string;

  @Metadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @Metadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;

  @Metadata({ data: "json, name=swap_size" })
  swapSize?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CreateLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateLinodeInstanceSecurityOption2;
}


export class CreateLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateLinodeInstanceRequestBody;

  @Metadata()
  security: CreateLinodeInstanceSecurity;
}


export class CreateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linode?: shared.Linode;

  @Metadata()
  statusCode: number;

  @Metadata()
  createLinodeInstanceDefaultApplicationJsonObject?: CreateLinodeInstanceDefaultApplicationJson;
}
