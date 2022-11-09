import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateStackScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" })
  stackscriptId: string;
}


export class UpdateStackScriptSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateStackScriptSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateStackScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateStackScriptSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateStackScriptSecurityOption2;
}


export class UpdateStackScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateStackScriptPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.StackScript;

  @Metadata()
  security: UpdateStackScriptSecurity;
}


export class UpdateStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateStackScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stackScript?: shared.StackScript;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStackScriptDefaultApplicationJsonObject?: UpdateStackScriptDefaultApplicationJson;
}
