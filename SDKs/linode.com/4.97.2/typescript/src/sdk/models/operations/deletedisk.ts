import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDiskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class DeleteDiskSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteDiskSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteDiskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteDiskSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteDiskSecurityOption2;
}


export class DeleteDiskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDiskPathParams;

  @Metadata()
  security: DeleteDiskSecurity;
}


export class DeleteDiskDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteDiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDisk200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteDiskDefaultApplicationJsonObject?: DeleteDiskDefaultApplicationJson;
}
