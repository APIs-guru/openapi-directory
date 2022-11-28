import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class DeleteConversationRequest extends SpeakeasyBase {
    pathParams: DeleteConversationPathParams;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteConversation200ApplicationJsonObject?: Map<string, any>;
}
