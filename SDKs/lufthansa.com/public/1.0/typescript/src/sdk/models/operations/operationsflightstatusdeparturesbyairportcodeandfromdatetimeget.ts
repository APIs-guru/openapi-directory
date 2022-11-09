import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams;

  @Metadata()
  queryParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams;

  @Metadata()
  headers: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders;

  @Metadata()
  security: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
