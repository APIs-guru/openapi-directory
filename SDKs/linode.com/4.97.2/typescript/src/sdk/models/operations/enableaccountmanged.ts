import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableAccountMangedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class EnableAccountMangedDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableAccountMangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: EnableAccountMangedSecurity;
}


export class EnableAccountMangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enableAccountManged200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  enableAccountMangedDefaultApplicationJsonObject?: EnableAccountMangedDefaultApplicationJson;
}
