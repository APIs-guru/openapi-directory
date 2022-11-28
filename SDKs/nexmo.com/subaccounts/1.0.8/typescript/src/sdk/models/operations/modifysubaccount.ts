import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ModifySubaccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subaccount_key" })
  subaccountKey: string;
}


export class ModifySubaccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ModifySubaccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// ModifySubaccount404ApplicationJson
/** 
 * Invalid API Key
**/
export class ModifySubaccount404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class ModifySubaccount422ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class ModifySubaccount422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: ModifySubaccount422ApplicationJsonInvalidParameters })
  invalidParameters: ModifySubaccount422ApplicationJsonInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class ModifySubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifySubaccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifySubaccountRequest;

  @SpeakeasyMetadata()
  security: ModifySubaccountSecurity;
}


export class ModifySubaccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subaccountResponse?: any;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  modifySubaccount401ApplicationJsonObject?: ModifySubaccount401ApplicationJson;

  @SpeakeasyMetadata()
  modifySubaccount404ApplicationJsonObject?: ModifySubaccount404ApplicationJson;

  @SpeakeasyMetadata()
  modifySubaccount422ApplicationJsonObject?: ModifySubaccount422ApplicationJson;
}
