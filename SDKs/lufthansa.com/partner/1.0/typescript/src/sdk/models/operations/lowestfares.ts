import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LowestFaresQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class LowestFaresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class LowestFaresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class LowestFaresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LowestFaresQueryParams;

  @SpeakeasyMetadata()
  headers: LowestFaresHeaders;

  @SpeakeasyMetadata()
  security: LowestFaresSecurity;
}


export class LowestFaresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lowestFares200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
