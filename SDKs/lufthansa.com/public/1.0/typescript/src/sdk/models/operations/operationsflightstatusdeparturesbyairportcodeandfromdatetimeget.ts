import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams;

  @SpeakeasyMetadata()
  headers: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders;

  @SpeakeasyMetadata()
  security: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;
}


export class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
