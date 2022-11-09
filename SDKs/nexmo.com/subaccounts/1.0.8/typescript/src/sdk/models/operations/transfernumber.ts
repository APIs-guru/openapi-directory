import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransferNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransferNumberPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransferNumberRequest;

  @Metadata()
  security: TransferNumberSecurity;
}


export class TransferNumber401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumber409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumber422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferNumber422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: operations.TransferNumber422ApplicationJsonInvalidParameters })
  invalidParameters: TransferNumber422ApplicationJsonInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transferNumberResponse?: any;

  @Metadata()
  transferNumber401ApplicationJsonObject?: TransferNumber401ApplicationJson;

  @Metadata()
  transferNumber403ApplicationJsonOneOf?: any;

  @Metadata()
  transferNumber404ApplicationJsonOneOf?: any;

  @Metadata()
  transferNumber409ApplicationJsonObject?: TransferNumber409ApplicationJson;

  @Metadata()
  transferNumber422ApplicationJsonObject?: TransferNumber422ApplicationJson;
}
