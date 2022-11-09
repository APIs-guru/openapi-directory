import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerGetInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetInvoiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=invoiceID" })
  invoiceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetInvoicePathParams;

  @Metadata()
  queryParams: LandlordControllerGetInvoiceQueryParams;
}


export class LandlordControllerGetInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
