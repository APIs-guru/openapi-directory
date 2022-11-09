import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams;

  @Metadata()
  queryParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams;

  @Metadata()
  headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders;

  @Metadata()
  security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
