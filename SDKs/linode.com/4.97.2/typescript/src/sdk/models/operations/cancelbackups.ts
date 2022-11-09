import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelBackupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CancelBackupsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CancelBackupsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CancelBackupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CancelBackupsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CancelBackupsSecurityOption2;
}


export class CancelBackupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelBackupsPathParams;

  @Metadata()
  security: CancelBackupsSecurity;
}


export class CancelBackupsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cancelBackups200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  cancelBackupsDefaultApplicationJsonObject?: CancelBackupsDefaultApplicationJson;
}
