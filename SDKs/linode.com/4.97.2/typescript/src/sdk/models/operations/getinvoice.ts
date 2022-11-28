import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: number;
}


export class GetInvoiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetInvoiceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoicePathParams;

  @SpeakeasyMetadata()
  security: GetInvoiceSecurity;
}


export class GetInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoice?: shared.Invoice;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvoiceDefaultApplicationJsonObject?: GetInvoiceDefaultApplicationJson;
}
