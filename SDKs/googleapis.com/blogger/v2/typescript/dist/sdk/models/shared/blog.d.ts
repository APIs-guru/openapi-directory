import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
/**
 * The locale this Blog is set to.
**/
export declare class BlogLocale extends SpeakeasyBase {
    country?: string;
    language?: string;
    variant?: string;
}
/**
 * The container of pages in this blog.
**/
export declare class BlogPages extends SpeakeasyBase {
    selfLink?: string;
    totalItems?: number;
}
/**
 * The container of posts in this blog.
**/
export declare class BlogPosts extends SpeakeasyBase {
    items?: Post[];
    selfLink?: string;
    totalItems?: number;
}
export declare enum BlogStatusEnum {
    Live = "LIVE",
    Deleted = "DELETED"
}
export declare class Blog extends SpeakeasyBase {
    customMetaData?: string;
    description?: string;
    id?: string;
    kind?: string;
    locale?: BlogLocale;
    name?: string;
    pages?: BlogPages;
    posts?: BlogPosts;
    published?: string;
    selfLink?: string;
    status?: BlogStatusEnum;
    updated?: string;
    url?: string;
}
