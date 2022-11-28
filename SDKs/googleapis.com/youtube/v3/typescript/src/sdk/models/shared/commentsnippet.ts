import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippetAuthorChannelId } from "./commentsnippetauthorchannelid";


export enum CommentSnippetModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}

export enum CommentSnippetViewerRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}


// CommentSnippet
/** 
 * Basic details about a comment, such as its author and text.
**/
export class CommentSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorChannelId" })
  authorChannelId?: CommentSnippetAuthorChannelId;

  @SpeakeasyMetadata({ data: "json, name=authorChannelUrl" })
  authorChannelUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=authorDisplayName" })
  authorDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=authorProfileImageUrl" })
  authorProfileImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=canRate" })
  canRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=likeCount" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=moderationStatus" })
  moderationStatus?: CommentSnippetModerationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=textDisplay" })
  textDisplay?: string;

  @SpeakeasyMetadata({ data: "json, name=textOriginal" })
  textOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;

  @SpeakeasyMetadata({ data: "json, name=viewerRating" })
  viewerRating?: CommentSnippetViewerRatingEnum;
}
