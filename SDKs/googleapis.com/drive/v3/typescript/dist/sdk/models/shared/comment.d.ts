import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Reply } from "./reply";
/**
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
**/
export declare class CommentQuotedFileContent extends SpeakeasyBase {
    mimeType?: string;
    value?: string;
}
/**
 * A comment on a file.
**/
export declare class Comment extends SpeakeasyBase {
    anchor?: string;
    author?: User;
    content?: string;
    createdTime?: Date;
    deleted?: boolean;
    htmlContent?: string;
    id?: string;
    kind?: string;
    modifiedTime?: Date;
    quotedFileContent?: CommentQuotedFileContent;
    replies?: Reply[];
    resolved?: boolean;
}
