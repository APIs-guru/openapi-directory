import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";
import { CommentReply } from "./commentreply";


// CommentContext
/** 
 * The context of the file which is being commented on.
**/
export class CommentContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// Comment
/** 
 * A comment on a file in Google Drive.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=anchor" })
  anchor?: string;

  @Metadata({ data: "json, name=author" })
  author?: User;

  @Metadata({ data: "json, name=commentId" })
  commentId?: string;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=context" })
  context?: CommentContext;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=fileTitle" })
  fileTitle?: string;

  @Metadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=replies", elemType: shared.CommentReply })
  replies?: CommentReply[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
