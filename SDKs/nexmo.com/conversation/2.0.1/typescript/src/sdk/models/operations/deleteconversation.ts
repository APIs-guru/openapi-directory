import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class DeleteConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConversationPathParams;
}


export class DeleteConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteConversation200ApplicationJsonObject?: Map<string, any>;
}
