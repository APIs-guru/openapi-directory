import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class RetrieveConversation200ApplicationJsonMembers extends SpeakeasyBase {
    channel?: shared.Channel;
    initiator?: shared.Initiator;
    memberId?: string;
    name?: string;
    state?: shared.MemberStateEnum;
    timestamp?: shared.TimestampResMember;
    userId?: string;
}
export declare class RetrieveConversation200ApplicationJsonProperties extends SpeakeasyBase {
    video?: boolean;
}
/**
 * Conversation Object
**/
export declare class RetrieveConversation200ApplicationJson extends SpeakeasyBase {
    links?: shared.LinksConversation;
    apiKey?: string;
    displayName?: string;
    members?: RetrieveConversation200ApplicationJsonMembers[];
    name?: string;
    numbers?: Map<string, any>;
    properties?: RetrieveConversation200ApplicationJsonProperties;
    sequenceNumber?: string;
    timestamp?: shared.TimestampResConversation;
    uuid: string;
}
export declare class RetrieveConversationRequest extends SpeakeasyBase {
    pathParams: RetrieveConversationPathParams;
}
export declare class RetrieveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    retrieveConversation200ApplicationJsonObject?: RetrieveConversation200ApplicationJson;
}
