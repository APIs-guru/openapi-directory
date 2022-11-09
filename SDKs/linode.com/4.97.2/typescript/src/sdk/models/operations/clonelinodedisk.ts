import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneLinodeDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CloneLinodeDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CloneLinodeDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CloneLinodeDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloneLinodeDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloneLinodeDiskSecurityOption2;
}


export class CloneLinodeDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneLinodeDiskPathParams;

  @Metadata()
  security: CloneLinodeDiskSecurity;
}


export class CloneLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneLinodeDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disk?: shared.Disk;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneLinodeDiskDefaultApplicationJsonObject?: CloneLinodeDiskDefaultApplicationJson;
}
