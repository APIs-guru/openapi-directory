import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: shared.EventTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_text" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;

  @Metadata()
  security: GetEventsSecurity;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  auditResp?: shared.AuditResp;

  @Metadata()
  contentType: string;

  @Metadata()
  errorForbidden?: shared.ErrorForbidden;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @Metadata()
  statusCode: number;
}
