import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStackScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" })
  stackscriptId: string;
}


export class GetStackScriptSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetStackScriptSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetStackScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetStackScriptSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetStackScriptSecurityOption2;
}


export class GetStackScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStackScriptPathParams;

  @Metadata()
  security: GetStackScriptSecurity;
}


export class GetStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetStackScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stackScript?: shared.StackScript;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStackScriptDefaultApplicationJsonObject?: GetStackScriptDefaultApplicationJson;
}
