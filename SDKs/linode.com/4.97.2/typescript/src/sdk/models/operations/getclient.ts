import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class GetClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetClientSecurityOption2;
}


export class GetClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClientPathParams;

  @Metadata()
  security: GetClientSecurity;
}


export class GetClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClientDefaultApplicationJsonObject?: GetClientDefaultApplicationJson;
}
