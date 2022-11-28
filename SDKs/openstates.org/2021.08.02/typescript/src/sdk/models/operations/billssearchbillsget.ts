import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BillsSearchBillsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action_since" })
  actionSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chamber" })
  chamber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_since" })
  createdSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=session" })
  session?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.BillSortOptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor" })
  sponsor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_classification" })
  sponsorClassification?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_since" })
  updatedSince?: string;
}


export class BillsSearchBillsGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillsSearchBillsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BillsSearchBillsGetQueryParams;

  @SpeakeasyMetadata()
  headers: BillsSearchBillsGetHeaders;
}


export class BillsSearchBillsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billList?: shared.BillList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
