import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserGrantsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserGrantsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetUserGrantsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetUserGrantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserGrantsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserGrantsSecurityOption2;
}


export class GetUserGrantsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserGrantsPathParams;

  @Metadata()
  security: GetUserGrantsSecurity;
}


export class GetUserGrantsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetUserGrantsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  grantsResponse?: shared.GrantsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserGrantsDefaultApplicationJsonObject?: GetUserGrantsDefaultApplicationJson;
}
