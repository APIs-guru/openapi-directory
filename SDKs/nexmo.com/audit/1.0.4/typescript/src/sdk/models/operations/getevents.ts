import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: shared.EventTypesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetEventsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsQueryParams;

  @SpeakeasyMetadata()
  security: GetEventsSecurity;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditResp?: shared.AuditResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorForbidden?: shared.ErrorForbidden;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @SpeakeasyMetadata()
  statusCode: number;
}
