import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSubaccountsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveSubaccountsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveSubaccountsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSubaccountsListPathParams;

  @Metadata()
  security: RetrieveSubaccountsListSecurity;
}


export class RetrieveSubaccountsList401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// RetrieveSubaccountsList404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveSubaccountsList404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveSubaccountsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subaccountsAllResponse?: any;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  retrieveSubaccountsList401ApplicationJsonObject?: RetrieveSubaccountsList401ApplicationJson;

  @Metadata()
  retrieveSubaccountsList404ApplicationJsonObject?: RetrieveSubaccountsList404ApplicationJson;
}
