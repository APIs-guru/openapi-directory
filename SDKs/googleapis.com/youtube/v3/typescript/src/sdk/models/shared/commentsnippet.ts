import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommentSnippetAuthorChannelId } from "./commentsnippetauthorchannelid";

export enum CommentSnippetModerationStatusEnum {
    Published = "published"
,    HeldForReview = "heldForReview"
,    LikelySpam = "likelySpam"
,    Rejected = "rejected"
}

export enum CommentSnippetViewerRatingEnum {
    None = "none"
,    Like = "like"
,    Dislike = "dislike"
}


// CommentSnippet
/** 
 * Basic details about a comment, such as its author and text.
**/
export class CommentSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorChannelId" })
  authorChannelId?: CommentSnippetAuthorChannelId;

  @Metadata({ data: "json, name=authorChannelUrl" })
  authorChannelUrl?: string;

  @Metadata({ data: "json, name=authorDisplayName" })
  authorDisplayName?: string;

  @Metadata({ data: "json, name=authorProfileImageUrl" })
  authorProfileImageUrl?: string;

  @Metadata({ data: "json, name=canRate" })
  canRate?: boolean;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=likeCount" })
  likeCount?: number;

  @Metadata({ data: "json, name=moderationStatus" })
  moderationStatus?: CommentSnippetModerationStatusEnum;

  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=textDisplay" })
  textDisplay?: string;

  @Metadata({ data: "json, name=textOriginal" })
  textOriginal?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;

  @Metadata({ data: "json, name=viewerRating" })
  viewerRating?: CommentSnippetViewerRatingEnum;
}
