import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=directFlights" })
  directFlights?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;

  @Metadata()
  queryParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;

  @Metadata()
  headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;

  @Metadata()
  security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
