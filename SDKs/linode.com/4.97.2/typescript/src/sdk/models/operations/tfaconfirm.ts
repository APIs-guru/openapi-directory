import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TfaConfirmSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class TfaConfirmSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class TfaConfirmSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TfaConfirmSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TfaConfirmSecurityOption2;
}


export class TfaConfirmRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: TfaConfirmSecurity;
}


export class TfaConfirmDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class TfaConfirmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tfaConfirm200ApplicationJsonAny?: any;

  @Metadata()
  tfaConfirmDefaultApplicationJsonObject?: TfaConfirmDefaultApplicationJson;
}
