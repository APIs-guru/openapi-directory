import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLinodeDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AddLinodeDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddLinodeDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AddLinodeDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AddLinodeDiskSecurityOption2;
}


export class AddLinodeDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddLinodeDiskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiskRequest;

  @Metadata()
  security: AddLinodeDiskSecurity;
}


export class AddLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disk?: shared.Disk;

  @Metadata()
  statusCode: number;

  @Metadata()
  addLinodeDiskDefaultApplicationJsonObject?: AddLinodeDiskDefaultApplicationJson;
}
