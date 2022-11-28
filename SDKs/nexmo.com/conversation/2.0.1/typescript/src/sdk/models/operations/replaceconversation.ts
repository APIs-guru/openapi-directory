import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReplaceConversationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: shared.ConversationProperties;
}


export class ReplaceConversation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ReplaceConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReplaceConversationRequestBody;
}


export class ReplaceConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  replaceConversation200ApplicationJsonObject?: ReplaceConversation200ApplicationJson;
}
