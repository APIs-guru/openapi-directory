import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BestFaresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-family" })
  fareFamily?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=range" })
  range: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trip-duration" })
  tripDuration: string;
}


export class BestFaresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class BestFaresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class BestFaresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BestFaresQueryParams;

  @SpeakeasyMetadata()
  headers: BestFaresHeaders;

  @SpeakeasyMetadata()
  security: BestFaresSecurity;
}


export class BestFaresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bestFares200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
