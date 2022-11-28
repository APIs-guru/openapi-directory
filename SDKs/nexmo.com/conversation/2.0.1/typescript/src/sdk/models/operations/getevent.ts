import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}


export class GetEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventPathParams;
}


export class GetEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventRetrieved?: shared.EventRetrieved;
}
