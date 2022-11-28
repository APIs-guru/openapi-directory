import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams;

  @SpeakeasyMetadata()
  headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders;

  @SpeakeasyMetadata()
  security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;
}


export class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
