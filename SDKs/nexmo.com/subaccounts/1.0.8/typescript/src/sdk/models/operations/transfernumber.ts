import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferNumber401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumber409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumber422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferNumber422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferNumber422ApplicationJsonInvalidParameters })
  invalidParameters: TransferNumber422ApplicationJsonInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransferNumberRequest;

  @SpeakeasyMetadata()
  security: TransferNumberSecurity;
}


export class TransferNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transferNumberResponse?: any;

  @SpeakeasyMetadata()
  transferNumber401ApplicationJsonObject?: TransferNumber401ApplicationJson;

  @SpeakeasyMetadata()
  transferNumber403ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  transferNumber404ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  transferNumber409ApplicationJsonObject?: TransferNumber409ApplicationJson;

  @SpeakeasyMetadata()
  transferNumber422ApplicationJsonObject?: TransferNumber422ApplicationJson;
}
