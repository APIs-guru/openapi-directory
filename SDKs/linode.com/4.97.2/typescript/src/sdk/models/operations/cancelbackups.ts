import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelBackupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CancelBackupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CancelBackupsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelBackupsPathParams;

  @SpeakeasyMetadata()
  security: CancelBackupsSecurity;
}


export class CancelBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelBackups200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  cancelBackupsDefaultApplicationJsonObject?: CancelBackupsDefaultApplicationJson;
}
