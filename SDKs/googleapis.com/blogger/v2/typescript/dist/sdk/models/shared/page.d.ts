import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The creator's avatar.
**/
export declare class PageAuthorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * The author of this Page.
**/
export declare class PageAuthor extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    image?: PageAuthorImage;
    url?: string;
}
/**
 * Data about the blog containing this Page.
**/
export declare class PageBlog extends SpeakeasyBase {
    id?: string;
}
export declare enum PageStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    SoftTrashed = "SOFT_TRASHED"
}
export declare class Page extends SpeakeasyBase {
    author?: PageAuthor;
    blog?: PageBlog;
    content?: string;
    etag?: string;
    id?: string;
    kind?: string;
    published?: string;
    selfLink?: string;
    status?: PageStatusEnum;
    title?: string;
    trashed?: string;
    updated?: string;
    url?: string;
}
