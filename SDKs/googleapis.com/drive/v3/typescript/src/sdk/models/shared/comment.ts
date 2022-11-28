import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Reply } from "./reply";



// CommentQuotedFileContent
/** 
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
**/
export class CommentQuotedFileContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Comment
/** 
 * A comment on a file.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anchor" })
  anchor?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: User;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=quotedFileContent" })
  quotedFileContent?: CommentQuotedFileContent;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Reply })
  replies?: Reply[];

  @SpeakeasyMetadata({ data: "json, name=resolved" })
  resolved?: boolean;
}
