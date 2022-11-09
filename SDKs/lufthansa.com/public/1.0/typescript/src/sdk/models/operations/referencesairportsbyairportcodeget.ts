import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesAirportsByAirportCodeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;
}


export class ReferencesAirportsByAirportCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=LHoperated" })
  lHoperated?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAirportsByAirportCodeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirportsByAirportCodeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirportsByAirportCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesAirportsByAirportCodeGetPathParams;

  @Metadata()
  queryParams: ReferencesAirportsByAirportCodeGetQueryParams;

  @Metadata()
  headers: ReferencesAirportsByAirportCodeGetHeaders;

  @Metadata()
  security: ReferencesAirportsByAirportCodeGetSecurity;
}


export class ReferencesAirportsByAirportCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  airportResponse?: shared.AirportResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
