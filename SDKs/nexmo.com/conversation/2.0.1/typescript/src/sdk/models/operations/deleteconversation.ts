import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class DeleteConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConversationPathParams;
}


export class DeleteConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteConversation200ApplicationJsonObject?: Map<string, any>;
}
