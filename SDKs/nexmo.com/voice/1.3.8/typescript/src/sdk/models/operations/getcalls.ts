import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCallsOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCallsStatusEnum {
    Started = "started"
,    Ringing = "ringing"
,    Answered = "answered"
,    Machine = "machine"
,    Completed = "completed"
,    Busy = "busy"
,    Cancelled = "cancelled"
,    Failed = "failed"
,    Rejected = "rejected"
,    Timeout = "timeout"
,    Unanswered = "unanswered"
}


export class GetCallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conversation_uuid" })
  conversationUuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCallsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_index" })
  recordIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCallsStatusEnum;
}


export class GetCallsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCallsQueryParams;

  @Metadata()
  security: GetCallsSecurity;
}


export class GetCallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCallsResponse?: shared.GetCallsResponse;

  @Metadata()
  statusCode: number;
}
