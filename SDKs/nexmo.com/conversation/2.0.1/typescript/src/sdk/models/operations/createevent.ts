import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


// CreateEventRequestBody
/** 
 * Create New Event Request Payload Object
**/
export class CreateEventRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// CreateEvent201ApplicationJson
/** 
 * Create New Event Response Payload Object
**/
export class CreateEvent201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}


export class CreateEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEventRequestBody;
}


export class CreateEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createEvent201ApplicationJsonObject?: CreateEvent201ApplicationJson;
}
