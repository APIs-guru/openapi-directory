import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeDiskSecurityOption2;
}


export class GetLinodeDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeDiskPathParams;

  @Metadata()
  security: GetLinodeDiskSecurity;
}


export class GetLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disk?: shared.Disk;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeDiskDefaultApplicationJsonObject?: GetLinodeDiskDefaultApplicationJson;
}
