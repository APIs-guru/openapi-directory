import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSubAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class CreateSubAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateSubAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// CreateSubAccount404ApplicationJson
/** 
 * Invalid API Key
**/
export class CreateSubAccount404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CreateSubAccount422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreateSubAccount422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: CreateSubAccount422ApplicationJsonInvalidParameters })
  invalidParameters: CreateSubAccount422ApplicationJsonInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CreateSubAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSubAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NewSubaccountRequest;

  @SpeakeasyMetadata()
  security: CreateSubAccountSecurity;
}


export class CreateSubAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subaccountCreateResponse?: shared.SubaccountCreateResponse;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  createSubAccount401ApplicationJsonObject?: CreateSubAccount401ApplicationJson;

  @SpeakeasyMetadata()
  createSubAccount404ApplicationJsonObject?: CreateSubAccount404ApplicationJson;

  @SpeakeasyMetadata()
  createSubAccount422ApplicationJsonObject?: CreateSubAccount422ApplicationJson;
}
