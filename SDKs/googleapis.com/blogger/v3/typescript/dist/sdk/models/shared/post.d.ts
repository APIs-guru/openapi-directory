import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * The creator's avatar.
**/
export declare class PostAuthorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * The author of this Post.
**/
export declare class PostAuthor extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    image?: PostAuthorImage;
    url?: string;
}
/**
 * Data about the blog containing this Post.
**/
export declare class PostBlog extends SpeakeasyBase {
    id?: string;
}
export declare class PostImages extends SpeakeasyBase {
    url?: string;
}
/**
 * The location for geotagged posts.
**/
export declare class PostLocation extends SpeakeasyBase {
    lat?: number;
    lng?: number;
    name?: string;
    span?: string;
}
export declare enum PostReaderCommentsEnum {
    Allow = "ALLOW",
    DontAllowShowExisting = "DONT_ALLOW_SHOW_EXISTING",
    DontAllowHideExisting = "DONT_ALLOW_HIDE_EXISTING"
}
/**
 * The container of comments on this Post.
**/
export declare class PostReplies extends SpeakeasyBase {
    items?: Comment[];
    selfLink?: string;
    totalItems?: string;
}
export declare enum PostStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}
export declare class Post extends SpeakeasyBase {
    author?: PostAuthor;
    blog?: PostBlog;
    content?: string;
    customMetaData?: string;
    etag?: string;
    id?: string;
    images?: PostImages[];
    kind?: string;
    labels?: string[];
    location?: PostLocation;
    published?: string;
    readerComments?: PostReaderCommentsEnum;
    replies?: PostReplies;
    selfLink?: string;
    status?: PostStatusEnum;
    title?: string;
    titleLink?: string;
    trashed?: string;
    updated?: string;
    url?: string;
}
