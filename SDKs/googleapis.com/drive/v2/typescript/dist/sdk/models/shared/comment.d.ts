import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { CommentReply } from "./commentreply";
/**
 * The context of the file which is being commented on.
**/
export declare class CommentContext extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * A comment on a file in Google Drive.
**/
export declare class Comment extends SpeakeasyBase {
    anchor?: string;
    author?: User;
    commentId?: string;
    content?: string;
    context?: CommentContext;
    createdDate?: Date;
    deleted?: boolean;
    fileId?: string;
    fileTitle?: string;
    htmlContent?: string;
    kind?: string;
    modifiedDate?: Date;
    replies?: CommentReply[];
    selfLink?: string;
    status?: string;
}
