import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// CommentThreadSnippet
/** 
 * Basic details about a comment thread.
**/
export class CommentThreadSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canReply" })
  canReply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topLevelComment" })
  topLevelComment?: Comment;

  @SpeakeasyMetadata({ data: "json, name=totalReplyCount" })
  totalReplyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
