import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteStackScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" })
  stackscriptId: string;
}


export class DeleteStackScriptSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteStackScriptSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteStackScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteStackScriptSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteStackScriptSecurityOption2;
}


export class DeleteStackScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStackScriptPathParams;

  @Metadata()
  security: DeleteStackScriptSecurity;
}


export class DeleteStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteStackScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteStackScript200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteStackScriptDefaultApplicationJsonObject?: DeleteStackScriptDefaultApplicationJson;
}
