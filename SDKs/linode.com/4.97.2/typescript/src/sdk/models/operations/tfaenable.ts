import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TfaEnableSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class TfaEnableSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class TfaEnableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TfaEnableSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TfaEnableSecurityOption2;
}


export class TfaEnableRequest extends SpeakeasyBase {
  @Metadata()
  security: TfaEnableSecurity;
}


export class TfaEnableDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class TfaEnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tfaEnable200ApplicationJsonAny?: any;

  @Metadata()
  tfaEnableDefaultApplicationJsonObject?: TfaEnableDefaultApplicationJson;
}
