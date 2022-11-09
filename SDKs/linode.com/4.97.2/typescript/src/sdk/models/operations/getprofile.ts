import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileSecurityOption2;
}


export class GetProfileRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProfileSecurity;
}


export class GetProfileDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profile?: shared.Profile;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileDefaultApplicationJsonObject?: GetProfileDefaultApplicationJson;
}
