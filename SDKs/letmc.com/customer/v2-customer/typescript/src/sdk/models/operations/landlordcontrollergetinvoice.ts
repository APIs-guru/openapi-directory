import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LandlordControllerGetInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetInvoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invoiceID" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetInvoicePathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetInvoiceQueryParams;
}


export class LandlordControllerGetInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
