import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserGrantsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UpdateUserGrantsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateUserGrantsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateUserGrantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateUserGrantsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateUserGrantsSecurityOption2;
}


export class UpdateUserGrantsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserGrantsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GrantsResponse;

  @Metadata()
  security: UpdateUserGrantsSecurity;
}


export class UpdateUserGrantsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateUserGrantsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  grantsResponse?: shared.GrantsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateUserGrantsDefaultApplicationJsonObject?: UpdateUserGrantsDefaultApplicationJson;
}
