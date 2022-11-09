import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoiceItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: number;
}


export class GetInvoiceItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetInvoiceItemsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetInvoiceItemsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetInvoiceItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetInvoiceItemsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetInvoiceItemsSecurityOption2;
}


export class GetInvoiceItemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceItemsPathParams;

  @Metadata()
  queryParams: GetInvoiceItemsQueryParams;

  @Metadata()
  security: GetInvoiceItemsSecurity;
}


export class GetInvoiceItems200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.InvoiceItem })
  data?: shared.InvoiceItem[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetInvoiceItemsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetInvoiceItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoiceItems200ApplicationJsonObject?: GetInvoiceItems200ApplicationJson;

  @Metadata()
  getInvoiceItemsDefaultApplicationJsonObject?: GetInvoiceItemsDefaultApplicationJson;
}
