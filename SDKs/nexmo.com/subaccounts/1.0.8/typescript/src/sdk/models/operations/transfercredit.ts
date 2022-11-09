import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransferCreditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferCreditSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferCreditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransferCreditPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransferBalanceOrCreditRequest;

  @Metadata()
  security: TransferCreditSecurity;
}


export class TransferCredit401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// TransferCredit404ApplicationJson
/** 
 * Invalid API Key
**/
export class TransferCredit404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferCredit422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferCredit422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: operations.TransferCredit422ApplicationJsonInvalidParameters })
  invalidParameters: TransferCredit422ApplicationJsonInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class TransferCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transferCreditResponse?: any;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  transferCredit401ApplicationJsonObject?: TransferCredit401ApplicationJson;

  @Metadata()
  transferCredit404ApplicationJsonObject?: TransferCredit404ApplicationJson;

  @Metadata()
  transferCredit422ApplicationJsonObject?: TransferCredit422ApplicationJson;
}
