import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateClientRequestBodyStatusEnum {
    Active = "active"
,    Disabled = "disabled"
,    Suspended = "suspended"
}


export class CreateClientRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=status" })
  status?: CreateClientRequestBodyStatusEnum;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;
}


export class CreateClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateClientSecurityOption2;
}


export class CreateClientRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateClientRequestBody;

  @Metadata()
  security: CreateClientSecurity;
}


export class CreateClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  oAuthClient?: shared.OAuthClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  createClientDefaultApplicationJsonObject?: CreateClientDefaultApplicationJson;
}
