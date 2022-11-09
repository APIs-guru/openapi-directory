import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BillsSearchBillsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action_since" })
  actionSince?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=chamber" })
  chamber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created_since" })
  createdSince?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.BillIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=session" })
  session?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.BillSortOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sponsor" })
  sponsor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sponsor_classification" })
  sponsorClassification?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated_since" })
  updatedSince?: string;
}


export class BillsSearchBillsGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class BillsSearchBillsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BillsSearchBillsGetQueryParams;

  @Metadata()
  headers: BillsSearchBillsGetHeaders;
}


export class BillsSearchBillsGetResponse extends SpeakeasyBase {
  @Metadata()
  billList?: shared.BillList;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
