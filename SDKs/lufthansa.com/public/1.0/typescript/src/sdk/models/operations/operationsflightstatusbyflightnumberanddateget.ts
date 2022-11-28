import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OperationsFlightstatusByFlightNumberAndDateGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flightNumber" })
  flightNumber: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusByFlightNumberAndDateGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusByFlightNumberAndDateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OperationsFlightstatusByFlightNumberAndDateGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OperationsFlightstatusByFlightNumberAndDateGetQueryParams;

  @SpeakeasyMetadata()
  headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders;

  @SpeakeasyMetadata()
  security: OperationsFlightstatusByFlightNumberAndDateGetSecurity;
}


export class OperationsFlightstatusByFlightNumberAndDateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
