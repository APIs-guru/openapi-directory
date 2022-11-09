import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeepLinksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination-name" })
  destinationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encryption-key" })
  encryptionKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare" })
  fare?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare-currency" })
  fareCurrency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=net-fare" })
  netFare?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin-name" })
  originName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outbound-segments" })
  outboundSegments?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partnerid" })
  partnerid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-segments" })
  returnSegments?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class DeepLinksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class DeepLinksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class DeepLinksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeepLinksQueryParams;

  @Metadata()
  headers: DeepLinksHeaders;

  @Metadata()
  security: DeepLinksSecurity;
}


export class DeepLinksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deepLinks200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
