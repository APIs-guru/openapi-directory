import { SpeakeasyBase } from "../../../internal/utils";
import { CommentReply } from "./commentreply";
/**
 * A list of replies to a comment on a file in Google Drive.
**/
export declare class CommentReplyList extends SpeakeasyBase {
    items?: CommentReply[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
}
