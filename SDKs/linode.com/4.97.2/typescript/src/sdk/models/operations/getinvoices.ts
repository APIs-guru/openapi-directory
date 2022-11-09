import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetInvoicesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetInvoicesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetInvoicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetInvoicesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetInvoicesSecurityOption2;
}


export class GetInvoicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInvoicesQueryParams;

  @Metadata()
  security: GetInvoicesSecurity;
}


export class GetInvoices200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Invoice })
  data?: shared.Invoice[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetInvoicesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetInvoicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoices200ApplicationJsonObject?: GetInvoices200ApplicationJson;

  @Metadata()
  getInvoicesDefaultApplicationJsonObject?: GetInvoicesDefaultApplicationJson;
}
