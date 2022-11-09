import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// CommentReply
/** 
 * A comment on a file in Google Drive.
**/
export class CommentReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: User;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=replyId" })
  replyId?: string;

  @Metadata({ data: "json, name=verb" })
  verb?: string;
}
