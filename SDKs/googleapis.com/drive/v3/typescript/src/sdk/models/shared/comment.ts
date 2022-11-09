import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";
import { Reply } from "./reply";


// CommentQuotedFileContent
/** 
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
**/
export class CommentQuotedFileContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// Comment
/** 
 * A comment on a file.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=anchor" })
  anchor?: string;

  @Metadata({ data: "json, name=author" })
  author?: User;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @Metadata({ data: "json, name=quotedFileContent" })
  quotedFileContent?: CommentQuotedFileContent;

  @Metadata({ data: "json, name=replies", elemType: shared.Reply })
  replies?: Reply[];

  @Metadata({ data: "json, name=resolved" })
  resolved?: boolean;
}
