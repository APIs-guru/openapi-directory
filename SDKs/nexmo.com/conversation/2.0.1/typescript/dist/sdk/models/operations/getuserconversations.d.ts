import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetuserConversationsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetuserConversations200ApplicationJsonTimestamp extends SpeakeasyBase {
    created?: string;
}
export declare class GetuserConversations200ApplicationJson extends SpeakeasyBase {
    displayName?: string;
    href?: string;
    id?: string;
    imageUrl?: string;
    memberId?: string;
    name?: string;
    sequenceNumber?: number;
    state?: shared.MemberStateEnum;
    timestamp?: GetuserConversations200ApplicationJsonTimestamp;
}
export declare class GetuserConversationsRequest extends SpeakeasyBase {
    pathParams: GetuserConversationsPathParams;
}
export declare class GetuserConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getuserConversations200ApplicationJsonObjects?: GetuserConversations200ApplicationJson[];
}
