import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TfaDisableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class TfaDisableDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class TfaDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: TfaDisableSecurity;
}


export class TfaDisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tfaDisable200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  tfaDisableDefaultApplicationJsonObject?: TfaDisableDefaultApplicationJson;
}
