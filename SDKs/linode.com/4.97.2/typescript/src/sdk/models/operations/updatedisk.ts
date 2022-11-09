import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateDiskSecurityOption2;
}


export class UpdateDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDiskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Disk;

  @Metadata()
  security: UpdateDiskSecurity;
}


export class UpdateDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disk?: shared.Disk;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDiskDefaultApplicationJsonObject?: UpdateDiskDefaultApplicationJson;
}
