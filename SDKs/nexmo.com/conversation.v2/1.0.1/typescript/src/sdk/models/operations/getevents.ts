import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_id" })
  endId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_id" })
  startId?: string;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsPathParams;

  @Metadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEvents200ApplicationJsonAny?: any;
}
