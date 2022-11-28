import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LhDeepLinksFfpQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerid" })
  partnerid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class LhDeepLinksFfpHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class LhDeepLinksFfpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class LhDeepLinksFfpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LhDeepLinksFfpQueryParams;

  @SpeakeasyMetadata()
  headers: LhDeepLinksFfpHeaders;

  @SpeakeasyMetadata()
  security: LhDeepLinksFfpSecurity;
}


export class LhDeepLinksFfpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lhDeepLinksFfp200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
