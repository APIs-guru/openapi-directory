import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LhDeepLinksItcoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encryption-key" })
  encryptionKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare" })
  fare: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare-currency" })
  fareCurrency: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=net-fare" })
  netFare?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outbound-segments" })
  outboundSegments: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partnerid" })
  partnerid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-segments" })
  returnSegments?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class LhDeepLinksItcoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class LhDeepLinksItcoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class LhDeepLinksItcoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LhDeepLinksItcoQueryParams;

  @Metadata()
  headers: LhDeepLinksItcoHeaders;

  @Metadata()
  security: LhDeepLinksItcoSecurity;
}


export class LhDeepLinksItcoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lhDeepLinksItco200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
