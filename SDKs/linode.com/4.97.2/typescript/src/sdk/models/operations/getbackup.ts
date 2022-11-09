import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBackupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=backupId" })
  backupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetBackupSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetBackupSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetBackupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetBackupSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetBackupSecurityOption2;
}


export class GetBackupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBackupPathParams;

  @Metadata()
  security: GetBackupSecurity;
}


export class GetBackupDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetBackupResponse extends SpeakeasyBase {
  @Metadata()
  backup?: shared.Backup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBackupDefaultApplicationJsonObject?: GetBackupDefaultApplicationJson;
}
