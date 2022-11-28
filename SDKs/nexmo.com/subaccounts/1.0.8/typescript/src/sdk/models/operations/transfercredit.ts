import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferCreditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferCreditSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferCredit401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// TransferCredit404ApplicationJson
/** 
 * Invalid API Key
**/
export class TransferCredit404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferCredit422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferCredit422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferCredit422ApplicationJsonInvalidParameters })
  invalidParameters: TransferCredit422ApplicationJsonInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferCreditPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransferBalanceOrCreditRequest;

  @SpeakeasyMetadata()
  security: TransferCreditSecurity;
}


export class TransferCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transferCreditResponse?: any;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  transferCredit401ApplicationJsonObject?: TransferCredit401ApplicationJson;

  @SpeakeasyMetadata()
  transferCredit404ApplicationJsonObject?: TransferCredit404ApplicationJson;

  @SpeakeasyMetadata()
  transferCredit422ApplicationJsonObject?: TransferCredit422ApplicationJson;
}
