import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStackScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" })
  stackscriptId: string;
}


export class UpdateStackScriptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateStackScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStackScriptPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.StackScriptInput;

  @SpeakeasyMetadata()
  security: UpdateStackScriptSecurity;
}


export class UpdateStackScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  stackScript?: shared.StackScript;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateStackScriptDefaultApplicationJsonObject?: UpdateStackScriptDefaultApplicationJson;
}
