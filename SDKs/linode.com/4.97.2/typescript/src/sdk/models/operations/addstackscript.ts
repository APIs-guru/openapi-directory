import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddStackScriptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=deployments_active" })
  deploymentsActive?: number;

  @Metadata({ data: "json, name=deployments_total" })
  deploymentsTotal?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=images" })
  images: string[];

  @Metadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=mine" })
  mine?: boolean;

  @Metadata({ data: "json, name=rev_note" })
  revNote?: string;

  @Metadata({ data: "json, name=script" })
  script: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=user_defined_fields", elemType: shared.UserDefinedField })
  userDefinedFields?: shared.UserDefinedField[];

  @Metadata({ data: "json, name=user_gravatar_id" })
  userGravatarId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class AddStackScriptSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AddStackScriptSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddStackScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AddStackScriptSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AddStackScriptSecurityOption2;
}


export class AddStackScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: AddStackScriptRequestBody;

  @Metadata()
  security: AddStackScriptSecurity;
}


export class AddStackScriptDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddStackScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stackScript?: shared.StackScript;

  @Metadata()
  statusCode: number;

  @Metadata()
  addStackScriptDefaultApplicationJsonObject?: AddStackScriptDefaultApplicationJson;
}
