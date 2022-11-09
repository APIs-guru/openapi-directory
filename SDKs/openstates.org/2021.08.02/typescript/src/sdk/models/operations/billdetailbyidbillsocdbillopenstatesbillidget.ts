import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=openstates_bill_id" })
  openstatesBillId: string;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams;

  @Metadata()
  queryParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams;

  @Metadata()
  headers: BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders;
}


export class BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse extends SpeakeasyBase {
  @Metadata()
  bill?: shared.Bill;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
