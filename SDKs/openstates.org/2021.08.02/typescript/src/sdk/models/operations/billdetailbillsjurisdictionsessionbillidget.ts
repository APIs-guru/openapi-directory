import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillDetailBillsJurisdictionSessionBillIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bill_id" })
  billId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction" })
  jurisdiction: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class BillDetailBillsJurisdictionSessionBillIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];
}


export class BillDetailBillsJurisdictionSessionBillIdGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillDetailBillsJurisdictionSessionBillIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillDetailBillsJurisdictionSessionBillIdGetPathParams;

  @Metadata()
  queryParams: BillDetailBillsJurisdictionSessionBillIdGetQueryParams;

  @Metadata()
  headers: BillDetailBillsJurisdictionSessionBillIdGetHeaders;
}


export class BillDetailBillsJurisdictionSessionBillIdGetResponse extends SpeakeasyBase {
  @Metadata()
  bill?: shared.Bill;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
