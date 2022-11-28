import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Basic details about a comment thread.
**/
export declare class CommentThreadSnippet extends SpeakeasyBase {
    canReply?: boolean;
    channelId?: string;
    isPublic?: boolean;
    topLevelComment?: Comment;
    totalReplyCount?: number;
    videoId?: string;
}
