import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BestFaresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare-family" })
  fareFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=range" })
  range: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trip-duration" })
  tripDuration: string;
}


export class BestFaresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class BestFaresSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class BestFaresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BestFaresQueryParams;

  @Metadata()
  headers: BestFaresHeaders;

  @Metadata()
  security: BestFaresSecurity;
}


export class BestFaresResponse extends SpeakeasyBase {
  @Metadata()
  bestFares200ApplicationJsonString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
