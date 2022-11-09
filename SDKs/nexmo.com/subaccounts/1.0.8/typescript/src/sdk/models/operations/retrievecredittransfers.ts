import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCreditTransfersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api_key" })
  apiKey: string;
}


export class RetrieveCreditTransfersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subaccount" })
  subaccount?: string;
}


export class RetrieveCreditTransfersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RetrieveCreditTransfersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCreditTransfersPathParams;

  @Metadata()
  queryParams: RetrieveCreditTransfersQueryParams;

  @Metadata()
  security: RetrieveCreditTransfersSecurity;
}


export class RetrieveCreditTransfers401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// RetrieveCreditTransfers404ApplicationJson
/** 
 * Invalid API Key
**/
export class RetrieveCreditTransfers404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrieveCreditTransfersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCreditTransfersResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  @Metadata()
  retrieveCreditTransfers401ApplicationJsonObject?: RetrieveCreditTransfers401ApplicationJson;

  @Metadata()
  retrieveCreditTransfers404ApplicationJsonObject?: RetrieveCreditTransfers404ApplicationJson;
}
