import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSubaccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subaccount_key" })
  subaccountKey: string;
}


export class RetrieveSubaccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveSubaccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSubaccountPathParams;

  @Metadata()
  security: RetrieveSubaccountSecurity;
}


export class RetrieveSubaccount401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// RetrieveSubaccount404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveSubaccount404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveSubaccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subaccountResponse?: any;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  retrieveSubaccount401ApplicationJsonObject?: RetrieveSubaccount401ApplicationJson;

  @Metadata()
  retrieveSubaccount404ApplicationJsonObject?: RetrieveSubaccount404ApplicationJson;
}
