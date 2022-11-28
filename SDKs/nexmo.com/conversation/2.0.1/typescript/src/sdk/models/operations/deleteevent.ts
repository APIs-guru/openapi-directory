import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}


export class DeleteEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEventPathParams;
}


export class DeleteEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteEvent200ApplicationJsonObject?: Map<string, any>;
}
