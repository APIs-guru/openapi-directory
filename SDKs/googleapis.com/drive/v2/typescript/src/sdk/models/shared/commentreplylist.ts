import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommentReply } from "./commentreply";


// CommentReplyList
/** 
 * A list of replies to a comment on a file in Google Drive.
**/
export class CommentReplyList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CommentReply })
  items?: CommentReply[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
