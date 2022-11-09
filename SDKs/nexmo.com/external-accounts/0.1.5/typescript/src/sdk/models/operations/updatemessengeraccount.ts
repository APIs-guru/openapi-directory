import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMessengerAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class UpdateMessengerAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateMessengerAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateMessengerAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateMessengerAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateMessengerAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateMessengerAccountSecurityOption2;
}


export class UpdateMessengerAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMessengerAccountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMessengerAccountRequestBody;

  @Metadata()
  security: UpdateMessengerAccountSecurity;
}


export class UpdateMessengerAccount200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=api_key" })
  apiKey: string;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=external_id" })
  externalId: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;
}


export class UpdateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class UpdateMessengerAccount400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=invalid_params", elemType: operations.UpdateMessengerAccount400ApplicationJsonInvalidParams })
  invalidParams?: UpdateMessengerAccount400ApplicationJsonInvalidParams[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateMessengerAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateMessengerAccount200ApplicationJsonObject?: UpdateMessengerAccount200ApplicationJson;

  @Metadata()
  updateMessengerAccount400ApplicationJsonObject?: UpdateMessengerAccount400ApplicationJson;
}
