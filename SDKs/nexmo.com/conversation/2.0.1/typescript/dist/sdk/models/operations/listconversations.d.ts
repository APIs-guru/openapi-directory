import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConversationsQueryParams extends SpeakeasyBase {
    dateEnd?: string;
    dateStart?: string;
    order?: shared.OrderEnum;
    pageSize?: number;
    recordIndex?: number;
}
export declare class ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ListConversations200ApplicationJsonEmbeddedConversationsLinks extends SpeakeasyBase {
    self?: ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf;
}
export declare class ListConversations200ApplicationJsonEmbeddedConversations extends SpeakeasyBase {
    links?: ListConversations200ApplicationJsonEmbeddedConversationsLinks;
    name: string;
    uuid: string;
}
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export declare class ListConversations200ApplicationJsonEmbedded extends SpeakeasyBase {
    conversations: ListConversations200ApplicationJsonEmbeddedConversations[];
}
export declare class ListConversations200ApplicationJson extends SpeakeasyBase {
    embedded: ListConversations200ApplicationJsonEmbedded;
    links: shared.LinksConversationsList;
    count: number;
    pageSize: number;
    recordIndex: number;
}
export declare class ListConversationsRequest extends SpeakeasyBase {
    queryParams: ListConversationsQueryParams;
}
export declare class ListConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listConversations200ApplicationJsonObject?: ListConversations200ApplicationJson;
}
