import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEventsEventIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsEventIdPathParams;
}


export class GetEventsEventIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
