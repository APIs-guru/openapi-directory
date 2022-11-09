import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileGrantsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileGrantsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileGrantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileGrantsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileGrantsSecurityOption2;
}


export class GetProfileGrantsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProfileGrantsSecurity;
}


export class GetProfileGrantsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileGrantsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  grantsResponse?: shared.GrantsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileGrantsDefaultApplicationJsonObject?: GetProfileGrantsDefaultApplicationJson;
}
