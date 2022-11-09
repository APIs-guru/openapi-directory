import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cabinClass" })
  cabinClass: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" })
  flightNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams;

  @Metadata()
  headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders;

  @Metadata()
  security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
