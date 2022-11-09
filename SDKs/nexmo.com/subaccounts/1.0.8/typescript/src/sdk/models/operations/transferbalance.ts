import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransferBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferBalanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransferBalancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransferBalanceOrCreditRequest;

  @Metadata()
  security: TransferBalanceSecurity;
}


export class TransferBalance401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// TransferBalance404ApplicationJson
/** 
 * Invalid API Key
**/
export class TransferBalance404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferBalance422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferBalance422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: operations.TransferBalance422ApplicationJsonInvalidParameters })
  invalidParameters: TransferBalance422ApplicationJsonInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transferBalanceResponse?: any;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  transferBalance401ApplicationJsonObject?: TransferBalance401ApplicationJson;

  @Metadata()
  transferBalance404ApplicationJsonObject?: TransferBalance404ApplicationJson;

  @Metadata()
  transferBalance422ApplicationJsonObject?: TransferBalance422ApplicationJson;
}
