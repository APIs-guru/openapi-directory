import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddStackScriptRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images: string[];

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=rev_note" })
  revNote?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script: string;
}


export class AddStackScriptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AddStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddStackScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddStackScriptRequestBodyInput;

  @SpeakeasyMetadata()
  security: AddStackScriptSecurity;
}


export class AddStackScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  stackScript?: shared.StackScript;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addStackScriptDefaultApplicationJsonObject?: AddStackScriptDefaultApplicationJson;
}
