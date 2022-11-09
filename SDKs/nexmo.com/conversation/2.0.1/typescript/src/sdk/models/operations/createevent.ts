import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


// CreateEventRequestBody
/** 
 * Create New Event Request Payload Object
**/
export class CreateEventRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: Map<string, any>;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CreateEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEventPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateEventRequestBody;
}


// CreateEvent201ApplicationJson
/** 
 * Create New Event Response Payload Object
**/
export class CreateEvent201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}


export class CreateEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createEvent201ApplicationJsonObject?: CreateEvent201ApplicationJson;
}
