import { SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippetAuthorChannelId } from "./commentsnippetauthorchannelid";
export declare enum CommentSnippetModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}
export declare enum CommentSnippetViewerRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
/**
 * Basic details about a comment, such as its author and text.
**/
export declare class CommentSnippet extends SpeakeasyBase {
    authorChannelId?: CommentSnippetAuthorChannelId;
    authorChannelUrl?: string;
    authorDisplayName?: string;
    authorProfileImageUrl?: string;
    canRate?: boolean;
    channelId?: string;
    likeCount?: number;
    moderationStatus?: CommentSnippetModerationStatusEnum;
    parentId?: string;
    publishedAt?: Date;
    textDisplay?: string;
    textOriginal?: string;
    updatedAt?: Date;
    videoId?: string;
    viewerRating?: CommentSnippetViewerRatingEnum;
}
