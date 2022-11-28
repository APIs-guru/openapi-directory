import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCallsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCallsStatusEnum {
    Started = "started",
    Ringing = "ringing",
    Answered = "answered",
    Machine = "machine",
    Completed = "completed",
    Busy = "busy",
    Cancelled = "cancelled",
    Failed = "failed",
    Rejected = "rejected",
    Timeout = "timeout",
    Unanswered = "unanswered"
}


export class GetCallsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversation_uuid" })
  conversationUuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCallsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_index" })
  recordIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCallsStatusEnum;
}


export class GetCallsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCallsQueryParams;

  @SpeakeasyMetadata()
  security: GetCallsSecurity;
}


export class GetCallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCallsResponse?: shared.GetCallsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
