import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveSubaccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subaccount_key" })
  subaccountKey: string;
}


export class RetrieveSubaccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveSubaccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// RetrieveSubaccount404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveSubaccount404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveSubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveSubaccountPathParams;

  @SpeakeasyMetadata()
  security: RetrieveSubaccountSecurity;
}


export class RetrieveSubaccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subaccountResponse?: any;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  retrieveSubaccount401ApplicationJsonObject?: RetrieveSubaccount401ApplicationJson;

  @SpeakeasyMetadata()
  retrieveSubaccount404ApplicationJsonObject?: RetrieveSubaccount404ApplicationJson;
}
