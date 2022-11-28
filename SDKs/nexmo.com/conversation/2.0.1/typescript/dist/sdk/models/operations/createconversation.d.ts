import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConversationRequestBody extends SpeakeasyBase {
    displayName?: string;
    imageUrl?: string;
    name?: string;
    properties?: shared.ConversationProperties;
}
export declare class CreateConversation200ApplicationJson extends SpeakeasyBase {
    href: string;
    id: string;
}
export declare class CreateConversationRequest extends SpeakeasyBase {
    request?: CreateConversationRequestBody;
}
export declare class CreateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createConversation200ApplicationJsonObject?: CreateConversation200ApplicationJson;
}
