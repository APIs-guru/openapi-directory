import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveBalanceTransfersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveBalanceTransfersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccount" })
  subaccount?: string;
}


export class RetrieveBalanceTransfersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveBalanceTransfers401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// RetrieveBalanceTransfers404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveBalanceTransfers404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveBalanceTransfersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveBalanceTransfersPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrieveBalanceTransfersQueryParams;

  @SpeakeasyMetadata()
  security: RetrieveBalanceTransfersSecurity;
}


export class RetrieveBalanceTransfersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBalanceTransfersResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  retrieveBalanceTransfers401ApplicationJsonObject?: RetrieveBalanceTransfers401ApplicationJson;

  @SpeakeasyMetadata()
  retrieveBalanceTransfers404ApplicationJsonObject?: RetrieveBalanceTransfers404ApplicationJson;
}
