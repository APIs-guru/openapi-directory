import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}


export class GetEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPathParams;
}


export class GetEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventRetrieved?: shared.EventRetrieved;
}
