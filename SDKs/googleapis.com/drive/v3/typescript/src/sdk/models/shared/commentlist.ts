import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// CommentList
/** 
 * A list of comments on a file.
**/
export class CommentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
