import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllFaresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-family" })
  fareFamily?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class AllFaresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class AllFaresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class AllFaresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AllFaresQueryParams;

  @SpeakeasyMetadata()
  headers: AllFaresHeaders;

  @SpeakeasyMetadata()
  security: AllFaresSecurity;
}


export class AllFaresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allFares200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
