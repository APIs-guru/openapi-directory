import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const RecordConversationServerList = [
	"https://api.nexmo.com/v1",
] as const;


export class RecordConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class RecordConversationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: shared.ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=event_method" })
  eventMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: shared.FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=split" })
  split?: string;
}


export class RecordConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: RecordConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RecordConversationRequestBody;
}


export class RecordConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
