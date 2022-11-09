import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEventsEventIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsEventIdPathParams;
}


export class GetEventsEventIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
