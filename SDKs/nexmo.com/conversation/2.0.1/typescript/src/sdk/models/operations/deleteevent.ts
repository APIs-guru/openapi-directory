import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}


export class DeleteEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteEventPathParams;
}


export class DeleteEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteEvent200ApplicationJsonObject?: Map<string, any>;
}
