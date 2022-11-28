import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class TransferBalanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class TransferBalance401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// TransferBalance404ApplicationJson
/** 
 * Invalid API Key
**/
export class TransferBalance404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferBalance422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class TransferBalance422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferBalance422ApplicationJsonInvalidParameters })
  invalidParameters: TransferBalance422ApplicationJsonInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransferBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferBalancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransferBalanceOrCreditRequest;

  @SpeakeasyMetadata()
  security: TransferBalanceSecurity;
}


export class TransferBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transferBalanceResponse?: any;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  transferBalance401ApplicationJsonObject?: TransferBalance401ApplicationJson;

  @SpeakeasyMetadata()
  transferBalance404ApplicationJsonObject?: TransferBalance404ApplicationJson;

  @SpeakeasyMetadata()
  transferBalance422ApplicationJsonObject?: TransferBalance422ApplicationJson;
}
