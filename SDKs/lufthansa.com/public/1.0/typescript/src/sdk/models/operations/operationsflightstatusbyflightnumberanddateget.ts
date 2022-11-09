import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationsFlightstatusByFlightNumberAndDateGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" })
  flightNumber: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusByFlightNumberAndDateGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OperationsFlightstatusByFlightNumberAndDateGetPathParams;

  @Metadata()
  queryParams: OperationsFlightstatusByFlightNumberAndDateGetQueryParams;

  @Metadata()
  headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders;

  @Metadata()
  security: OperationsFlightstatusByFlightNumberAndDateGetSecurity;
}


export class OperationsFlightstatusByFlightNumberAndDateGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
