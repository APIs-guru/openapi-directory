import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMessengerAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateMessengerAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class CreateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreateMessengerAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_params", elemType: CreateMessengerAccount400ApplicationJsonInvalidParams })
  invalidParams?: CreateMessengerAccount400ApplicationJsonInvalidParams[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class CreateMessengerAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateMessengerAccountRequestBody;

  @SpeakeasyMetadata()
  security: CreateMessengerAccountSecurity;
}


export class CreateMessengerAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createMessengerAccount400ApplicationJsonObject?: CreateMessengerAccount400ApplicationJson;

  @SpeakeasyMetadata()
  messengerAccountResponse?: shared.MessengerAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
