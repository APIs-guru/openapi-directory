import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RestoreBackupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backupId" })
  backupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RestoreBackupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId: number;

  @SpeakeasyMetadata({ data: "json, name=overwrite" })
  overwrite?: boolean;
}


export class RestoreBackupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class RestoreBackupDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RestoreBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RestoreBackupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RestoreBackupRequestBody;

  @SpeakeasyMetadata()
  security: RestoreBackupSecurity;
}


export class RestoreBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  restoreBackup200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  restoreBackupDefaultApplicationJsonObject?: RestoreBackupDefaultApplicationJson;
}
