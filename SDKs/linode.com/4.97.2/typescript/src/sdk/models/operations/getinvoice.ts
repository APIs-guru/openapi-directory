import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: number;
}


export class GetInvoiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetInvoiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetInvoiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetInvoiceSecurityOption2;
}


export class GetInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicePathParams;

  @Metadata()
  security: GetInvoiceSecurity;
}


export class GetInvoiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invoice?: shared.Invoice;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoiceDefaultApplicationJsonObject?: GetInvoiceDefaultApplicationJson;
}
