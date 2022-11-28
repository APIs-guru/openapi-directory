import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LhDeepLinksItcoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encryption-key" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare" })
  fare: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-currency" })
  fareCurrency: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=net-fare" })
  netFare?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outbound-segments" })
  outboundSegments: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerid" })
  partnerid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-segments" })
  returnSegments?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class LhDeepLinksItcoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class LhDeepLinksItcoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class LhDeepLinksItcoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LhDeepLinksItcoQueryParams;

  @SpeakeasyMetadata()
  headers: LhDeepLinksItcoHeaders;

  @SpeakeasyMetadata()
  security: LhDeepLinksItcoSecurity;
}


export class LhDeepLinksItcoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lhDeepLinksItco200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
