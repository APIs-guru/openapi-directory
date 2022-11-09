import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAndSearchMediaItemsOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class ListAndSearchMediaItemsQueryParams extends SpeakeasyBase {
    endTime?: string;
    order?: ListAndSearchMediaItemsOrderEnum;
    pageIndex?: number;
    pageSize?: number;
    startTime?: string;
}
export declare class ListAndSearchMediaItemsRequest extends SpeakeasyBase {
    queryParams: ListAndSearchMediaItemsQueryParams;
}
/**
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
export declare class ListAndSearchMediaItems200ApplicationJsonEmbedded extends SpeakeasyBase {
    media?: shared.Media[];
}
export declare class ListAndSearchMediaItems200ApplicationJsonLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJsonLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJsonLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ListAndSearchMediaItems200ApplicationJsonLinks extends SpeakeasyBase {
    first?: ListAndSearchMediaItems200ApplicationJsonLinksFirst;
    last?: ListAndSearchMediaItems200ApplicationJsonLinksLast;
    self?: ListAndSearchMediaItems200ApplicationJsonLinksSelf;
}
export declare class ListAndSearchMediaItems200ApplicationJson extends SpeakeasyBase {
    embedded?: ListAndSearchMediaItems200ApplicationJsonEmbedded;
    links?: ListAndSearchMediaItems200ApplicationJsonLinks;
    count?: number;
    pageIndex?: number;
    pageSize?: number;
}
export declare class ListAndSearchMediaItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAndSearchMediaItems200ApplicationJsonObject?: ListAndSearchMediaItems200ApplicationJson;
}
