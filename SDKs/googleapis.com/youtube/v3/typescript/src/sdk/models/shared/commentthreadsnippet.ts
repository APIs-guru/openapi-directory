import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Comment } from "./comment";


// CommentThreadSnippet
/** 
 * Basic details about a comment thread.
**/
export class CommentThreadSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=canReply" })
  canReply?: boolean;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=topLevelComment" })
  topLevelComment?: Comment;

  @Metadata({ data: "json, name=totalReplyCount" })
  totalReplyCount?: number;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
