import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveCreditTransfersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveCreditTransfersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccount" })
  subaccount?: string;
}


export class RetrieveCreditTransfersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveCreditTransfers401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// RetrieveCreditTransfers404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveCreditTransfers404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveCreditTransfersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveCreditTransfersPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrieveCreditTransfersQueryParams;

  @SpeakeasyMetadata()
  security: RetrieveCreditTransfersSecurity;
}


export class RetrieveCreditTransfersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCreditTransfersResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @SpeakeasyMetadata()
  retrieveCreditTransfers401ApplicationJsonObject?: RetrieveCreditTransfers401ApplicationJson;

  @SpeakeasyMetadata()
  retrieveCreditTransfers404ApplicationJsonObject?: RetrieveCreditTransfers404ApplicationJson;
}
