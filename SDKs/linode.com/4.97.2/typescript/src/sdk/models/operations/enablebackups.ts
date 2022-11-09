import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableBackupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class EnableBackupsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class EnableBackupsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class EnableBackupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: EnableBackupsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: EnableBackupsSecurityOption2;
}


export class EnableBackupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnableBackupsPathParams;

  @Metadata()
  security: EnableBackupsSecurity;
}


export class EnableBackupsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enableBackups200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  enableBackupsDefaultApplicationJsonObject?: EnableBackupsDefaultApplicationJson;
}
