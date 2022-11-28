import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLinodeInstanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=backup_id" })
  backupId?: number;

  @SpeakeasyMetadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=booted" })
  booted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=interfaces", elemType: shared.LinodeConfigInterface })
  interfaces?: shared.LinodeConfigInterface[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=private_ip" })
  privateIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=root_pass" })
  rootPass?: string;

  @SpeakeasyMetadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;

  @SpeakeasyMetadata({ data: "json, name=swap_size" })
  swapSize?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CreateLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateLinodeInstanceRequestBody;

  @SpeakeasyMetadata()
  security: CreateLinodeInstanceSecurity;
}


export class CreateLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linode?: shared.Linode;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLinodeInstanceDefaultApplicationJsonObject?: CreateLinodeInstanceDefaultApplicationJson;
}
