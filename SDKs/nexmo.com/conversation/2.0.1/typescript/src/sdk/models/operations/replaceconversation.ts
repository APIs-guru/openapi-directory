import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReplaceConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: shared.ConversationProperties;
}


export class ReplaceConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceConversationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReplaceConversationRequestBody;
}


export class ReplaceConversation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ReplaceConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  replaceConversation200ApplicationJsonObject?: ReplaceConversation200ApplicationJson;
}
