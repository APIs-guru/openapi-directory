import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cabinClass" })
  cabinClass: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" })
  flightNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams;

  @SpeakeasyMetadata()
  headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders;

  @SpeakeasyMetadata()
  security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;
}


export class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
