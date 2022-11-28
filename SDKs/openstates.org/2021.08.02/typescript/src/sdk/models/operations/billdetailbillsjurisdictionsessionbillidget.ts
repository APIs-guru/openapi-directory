import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillDetailBillsJurisdictionSessionBillIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bill_id" })
  billId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction" })
  jurisdiction: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class BillDetailBillsJurisdictionSessionBillIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];
}


export class BillDetailBillsJurisdictionSessionBillIdGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillDetailBillsJurisdictionSessionBillIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillDetailBillsJurisdictionSessionBillIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: BillDetailBillsJurisdictionSessionBillIdGetQueryParams;

  @SpeakeasyMetadata()
  headers: BillDetailBillsJurisdictionSessionBillIdGetHeaders;
}


export class BillDetailBillsJurisdictionSessionBillIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bill?: shared.Bill;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
