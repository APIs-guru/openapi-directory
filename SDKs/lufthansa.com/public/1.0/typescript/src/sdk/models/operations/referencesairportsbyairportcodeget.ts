import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesAirportsByAirportCodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;
}


export class ReferencesAirportsByAirportCodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LHoperated" })
  lHoperated?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAirportsByAirportCodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirportsByAirportCodeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirportsByAirportCodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesAirportsByAirportCodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesAirportsByAirportCodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesAirportsByAirportCodeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesAirportsByAirportCodeGetSecurity;
}


export class ReferencesAirportsByAirportCodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  airportResponse?: shared.AirportResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
