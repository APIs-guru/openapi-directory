import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TfaDisableSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class TfaDisableSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class TfaDisableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TfaDisableSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TfaDisableSecurityOption2;
}


export class TfaDisableRequest extends SpeakeasyBase {
  @Metadata()
  security: TfaDisableSecurity;
}


export class TfaDisableDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class TfaDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tfaDisable200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  tfaDisableDefaultApplicationJsonObject?: TfaDisableDefaultApplicationJson;
}
