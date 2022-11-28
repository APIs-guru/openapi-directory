import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class ReplaceConversationRequestBody extends SpeakeasyBase {
    displayName?: string;
    imageUrl?: string;
    name?: string;
    properties?: shared.ConversationProperties;
}
export declare class ReplaceConversation200ApplicationJson extends SpeakeasyBase {
    href: string;
    id: string;
}
export declare class ReplaceConversationRequest extends SpeakeasyBase {
    pathParams: ReplaceConversationPathParams;
    request?: ReplaceConversationRequestBody;
}
export declare class ReplaceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    replaceConversation200ApplicationJsonObject?: ReplaceConversation200ApplicationJson;
}
