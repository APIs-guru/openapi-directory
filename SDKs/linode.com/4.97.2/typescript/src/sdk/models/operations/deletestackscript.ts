import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteStackScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" })
  stackscriptId: string;
}


export class DeleteStackScriptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteStackScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStackScriptPathParams;

  @SpeakeasyMetadata()
  security: DeleteStackScriptSecurity;
}


export class DeleteStackScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteStackScript200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteStackScriptDefaultApplicationJsonObject?: DeleteStackScriptDefaultApplicationJson;
}
