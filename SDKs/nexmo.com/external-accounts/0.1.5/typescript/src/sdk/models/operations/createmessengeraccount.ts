import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMessengerAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=external_id" })
  externalId: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateMessengerAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateMessengerAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateMessengerAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateMessengerAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateMessengerAccountSecurityOption2;
}


export class CreateMessengerAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMessengerAccountRequestBody;

  @Metadata()
  security: CreateMessengerAccountSecurity;
}


export class CreateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreateMessengerAccount400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=invalid_params", elemType: operations.CreateMessengerAccount400ApplicationJsonInvalidParams })
  invalidParams?: CreateMessengerAccount400ApplicationJsonInvalidParams[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class CreateMessengerAccountResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  createMessengerAccount400ApplicationJsonObject?: CreateMessengerAccount400ApplicationJson;

  @Metadata()
  messengerAccountResponse?: shared.MessengerAccountResponse;

  @Metadata()
  statusCode: number;
}
