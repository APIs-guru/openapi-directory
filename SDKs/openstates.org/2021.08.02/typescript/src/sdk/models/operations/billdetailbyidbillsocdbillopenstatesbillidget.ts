import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=openstates_bill_id" })
  openstatesBillId: string;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams;

  @SpeakeasyMetadata()
  headers: BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bill?: shared.Bill;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
