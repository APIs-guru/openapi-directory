import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentReply } from "./commentreply";



// CommentReplyList
/** 
 * A list of replies to a comment on a file in Google Drive.
**/
export class CommentReplyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CommentReply })
  items?: CommentReply[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
