import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllFaresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare-family" })
  fareFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return-date" })
  returnDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travel-date" })
  travelDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class AllFaresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class AllFaresSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class AllFaresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AllFaresQueryParams;

  @Metadata()
  headers: AllFaresHeaders;

  @Metadata()
  security: AllFaresSecurity;
}


export class AllFaresResponse extends SpeakeasyBase {
  @Metadata()
  allFares200ApplicationJsonString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
