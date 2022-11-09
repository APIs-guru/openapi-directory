import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LowestFaresQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class LowestFaresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class LowestFaresSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class LowestFaresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LowestFaresQueryParams;

  @Metadata()
  headers: LowestFaresHeaders;

  @Metadata()
  security: LowestFaresSecurity;
}


export class LowestFaresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lowestFares200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
