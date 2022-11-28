import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromDateTime" })
  fromDateTime: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=directFlights" })
  directFlights?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;

  @SpeakeasyMetadata()
  headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;

  @SpeakeasyMetadata()
  security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
}


export class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
