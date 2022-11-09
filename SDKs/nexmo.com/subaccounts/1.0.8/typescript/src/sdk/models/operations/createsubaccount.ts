import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class CreateSubAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateSubAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSubAccountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NewSubaccountRequest;

  @Metadata()
  security: CreateSubAccountSecurity;
}


export class CreateSubAccount401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// CreateSubAccount404ApplicationJson
/** 
 * Invalid API Key
**/
export class CreateSubAccount404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CreateSubAccount422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreateSubAccount422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: operations.CreateSubAccount422ApplicationJsonInvalidParameters })
  invalidParameters: CreateSubAccount422ApplicationJsonInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CreateSubAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subaccountCreateResponse?: shared.SubaccountCreateResponse;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  createSubAccount401ApplicationJsonObject?: CreateSubAccount401ApplicationJson;

  @Metadata()
  createSubAccount404ApplicationJsonObject?: CreateSubAccount404ApplicationJson;

  @Metadata()
  createSubAccount422ApplicationJsonObject?: CreateSubAccount422ApplicationJson;
}
