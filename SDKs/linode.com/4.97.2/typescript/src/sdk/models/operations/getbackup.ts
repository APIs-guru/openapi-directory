import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBackupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backupId" })
  backupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetBackupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetBackupDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBackupPathParams;

  @SpeakeasyMetadata()
  security: GetBackupSecurity;
}


export class GetBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backup?: shared.Backup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBackupDefaultApplicationJsonObject?: GetBackupDefaultApplicationJson;
}
