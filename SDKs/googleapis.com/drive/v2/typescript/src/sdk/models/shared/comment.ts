import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { CommentReply } from "./commentreply";



// CommentContext
/** 
 * The context of the file which is being commented on.
**/
export class CommentContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Comment
/** 
 * A comment on a file in Google Drive.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anchor" })
  anchor?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: User;

  @SpeakeasyMetadata({ data: "json, name=commentId" })
  commentId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: CommentContext;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileTitle" })
  fileTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: CommentReply })
  replies?: CommentReply[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
