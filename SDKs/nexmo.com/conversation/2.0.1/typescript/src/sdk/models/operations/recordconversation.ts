import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const RECORDCONVERSATION_SERVERS = [
	"https://api.nexmo.com/v1",
];



export class RecordConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class RecordConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: shared.ActionEnum;

  @Metadata({ data: "json, name=event_method" })
  eventMethod?: string;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @Metadata({ data: "json, name=format" })
  format?: shared.FormatEnum;

  @Metadata({ data: "json, name=split" })
  split?: string;
}


export class RecordConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: RecordConversationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: RecordConversationRequestBody;
}


export class RecordConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
