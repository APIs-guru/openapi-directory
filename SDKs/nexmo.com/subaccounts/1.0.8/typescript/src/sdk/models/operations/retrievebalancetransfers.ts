import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveBalanceTransfersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveBalanceTransfersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subaccount" })
  subaccount?: string;
}


export class RetrieveBalanceTransfersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveBalanceTransfersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveBalanceTransfersPathParams;

  @Metadata()
  queryParams: RetrieveBalanceTransfersQueryParams;

  @Metadata()
  security: RetrieveBalanceTransfersSecurity;
}


export class RetrieveBalanceTransfers401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// RetrieveBalanceTransfers404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveBalanceTransfers404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveBalanceTransfersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBalanceTransfersResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  retrieveBalanceTransfers401ApplicationJsonObject?: RetrieveBalanceTransfers401ApplicationJson;

  @Metadata()
  retrieveBalanceTransfers404ApplicationJsonObject?: RetrieveBalanceTransfers404ApplicationJson;
}
