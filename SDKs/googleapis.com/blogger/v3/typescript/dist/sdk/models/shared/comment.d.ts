import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The creator's avatar.
**/
export declare class CommentAuthorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * The author of this Comment.
**/
export declare class CommentAuthor extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    image?: CommentAuthorImage;
    url?: string;
}
/**
 * Data about the blog containing this comment.
**/
export declare class CommentBlog extends SpeakeasyBase {
    id?: string;
}
/**
 * Data about the comment this is in reply to.
**/
export declare class CommentInReplyTo extends SpeakeasyBase {
    id?: string;
}
/**
 * Data about the post containing this comment.
**/
export declare class CommentPost extends SpeakeasyBase {
    id?: string;
}
export declare enum CommentStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}
export declare class Comment extends SpeakeasyBase {
    author?: CommentAuthor;
    blog?: CommentBlog;
    content?: string;
    id?: string;
    inReplyTo?: CommentInReplyTo;
    kind?: string;
    post?: CommentPost;
    published?: string;
    selfLink?: string;
    status?: CommentStatusEnum;
    updated?: string;
}
