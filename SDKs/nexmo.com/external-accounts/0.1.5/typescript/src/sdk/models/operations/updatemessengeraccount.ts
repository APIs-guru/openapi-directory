import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMessengerAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;
}


export class UpdateMessengerAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateMessengerAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class UpdateMessengerAccount200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;
}


export class UpdateMessengerAccount400ApplicationJsonInvalidParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class UpdateMessengerAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_params", elemType: UpdateMessengerAccount400ApplicationJsonInvalidParams })
  invalidParams?: UpdateMessengerAccount400ApplicationJsonInvalidParams[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateMessengerAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMessengerAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMessengerAccountRequestBody;

  @SpeakeasyMetadata()
  security: UpdateMessengerAccountSecurity;
}


export class UpdateMessengerAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  fourHundredAndThreeResponse?: shared.FourHundredAndThreeResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMessengerAccount200ApplicationJsonObject?: UpdateMessengerAccount200ApplicationJson;

  @SpeakeasyMetadata()
  updateMessengerAccount400ApplicationJsonObject?: UpdateMessengerAccount400ApplicationJson;
}
