import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams;

  @Metadata()
  queryParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams;

  @Metadata()
  headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders;

  @Metadata()
  security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
