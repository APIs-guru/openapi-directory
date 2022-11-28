import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A comment on a file in Google Drive.
**/
export declare class CommentReply extends SpeakeasyBase {
    author?: User;
    content?: string;
    createdDate?: Date;
    deleted?: boolean;
    htmlContent?: string;
    kind?: string;
    modifiedDate?: Date;
    replyId?: string;
    verb?: string;
}
