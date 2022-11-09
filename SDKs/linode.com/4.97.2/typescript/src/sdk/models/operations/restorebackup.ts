import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RestoreBackupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=backupId" })
  backupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RestoreBackupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=linode_id" })
  linodeId: number;

  @Metadata({ data: "json, name=overwrite" })
  overwrite?: boolean;
}


export class RestoreBackupSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RestoreBackupSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RestoreBackupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RestoreBackupSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RestoreBackupSecurityOption2;
}


export class RestoreBackupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RestoreBackupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RestoreBackupRequestBody;

  @Metadata()
  security: RestoreBackupSecurity;
}


export class RestoreBackupDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RestoreBackupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  restoreBackup200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  restoreBackupDefaultApplicationJsonObject?: RestoreBackupDefaultApplicationJson;
}
