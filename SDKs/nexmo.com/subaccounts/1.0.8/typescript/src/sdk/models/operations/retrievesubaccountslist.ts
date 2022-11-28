import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveSubaccountsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveSubaccountsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveSubaccountsList401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// RetrieveSubaccountsList404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveSubaccountsList404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveSubaccountsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveSubaccountsListPathParams;

  @SpeakeasyMetadata()
  security: RetrieveSubaccountsListSecurity;
}


export class RetrieveSubaccountsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subaccountsAllResponse?: any;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  retrieveSubaccountsList401ApplicationJsonObject?: RetrieveSubaccountsList401ApplicationJson;

  @SpeakeasyMetadata()
  retrieveSubaccountsList404ApplicationJsonObject?: RetrieveSubaccountsList404ApplicationJson;
}
