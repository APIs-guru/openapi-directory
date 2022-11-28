import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=airportCode" })
  airportCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams;

  @SpeakeasyMetadata()
  headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders;

  @SpeakeasyMetadata()
  security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity;
}


export class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
