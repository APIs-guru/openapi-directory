import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableBackupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class EnableBackupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class EnableBackupsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableBackupsPathParams;

  @SpeakeasyMetadata()
  security: EnableBackupsSecurity;
}


export class EnableBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enableBackups200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  enableBackupsDefaultApplicationJsonObject?: EnableBackupsDefaultApplicationJson;
}
