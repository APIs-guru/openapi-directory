import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLegs200ApplicationJsonEmbeddedLegs extends SpeakeasyBase {
    embedded?: Map<string, any>;
    links?: Map<string, any>;
    conversationUuid?: string;
    from?: Map<string, any>;
    startEnd?: string;
    startTime?: string;
    state?: shared.LegStateEnum;
    to?: Map<string, any>;
    type?: shared.ChannelTypeEnum;
    uuid: string;
}
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export declare class ListLegs200ApplicationJsonEmbedded extends SpeakeasyBase {
    legs: ListLegs200ApplicationJsonEmbeddedLegs[];
}
export declare class ListLegs200ApplicationJsonLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ListLegs200ApplicationJsonLinks extends SpeakeasyBase {
    self: ListLegs200ApplicationJsonLinksSelf;
}
/**
 * List Legs Response Payload Object
**/
export declare class ListLegs200ApplicationJson extends SpeakeasyBase {
    embedded: ListLegs200ApplicationJsonEmbedded;
    links: ListLegs200ApplicationJsonLinks;
    count: number;
    pageSize: number;
    recordIndex: number;
}
export declare class ListLegsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listLegs200ApplicationJsonObject?: ListLegs200ApplicationJson;
}
