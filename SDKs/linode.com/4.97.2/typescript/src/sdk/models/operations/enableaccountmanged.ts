import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableAccountMangedSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class EnableAccountMangedSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class EnableAccountMangedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: EnableAccountMangedSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: EnableAccountMangedSecurityOption2;
}


export class EnableAccountMangedRequest extends SpeakeasyBase {
  @Metadata()
  security: EnableAccountMangedSecurity;
}


export class EnableAccountMangedDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableAccountMangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enableAccountManged200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  enableAccountMangedDefaultApplicationJsonObject?: EnableAccountMangedDefaultApplicationJson;
}
