import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class UpdateClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateClientSecurityOption2;
}


export class UpdateClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateClientPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.OAuthClient;

  @Metadata()
  security: UpdateClientSecurity;
}


export class UpdateClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateClientDefaultApplicationJsonObject?: UpdateClientDefaultApplicationJson;
}
