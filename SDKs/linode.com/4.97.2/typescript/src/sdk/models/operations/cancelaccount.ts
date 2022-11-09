import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CancelAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CancelAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CancelAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CancelAccountSecurityOption2;
}


export class CancelAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: CancelAccountSecurity;
}


export class CancelAccount200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=survey_link" })
  surveyLink?: string;
}


export class CancelAccount409ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class CancelAccount409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.CancelAccount409ApplicationJsonErrors })
  errors?: CancelAccount409ApplicationJsonErrors[];
}


export class CancelAccountDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cancelAccount200ApplicationJsonObject?: CancelAccount200ApplicationJson;

  @Metadata()
  cancelAccount409ApplicationJsonObject?: CancelAccount409ApplicationJson;

  @Metadata()
  cancelAccountDefaultApplicationJsonObject?: CancelAccountDefaultApplicationJson;
}
