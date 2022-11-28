import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// CommentReply
/** 
 * A comment on a file in Google Drive.
**/
export class CommentReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: User;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=replyId" })
  replyId?: string;

  @SpeakeasyMetadata({ data: "json, name=verb" })
  verb?: string;
}
