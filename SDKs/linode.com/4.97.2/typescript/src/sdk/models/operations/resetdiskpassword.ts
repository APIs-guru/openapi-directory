import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetDiskPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ResetDiskPasswordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResetDiskPasswordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResetDiskPasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResetDiskPasswordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResetDiskPasswordSecurityOption2;
}


export class ResetDiskPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetDiskPasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: ResetDiskPasswordSecurity;
}


export class ResetDiskPasswordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResetDiskPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resetDiskPassword200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  resetDiskPasswordDefaultApplicationJsonObject?: ResetDiskPasswordDefaultApplicationJson;
}
