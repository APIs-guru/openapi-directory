import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// CommentList
/** 
 * A list of comments on a file.
**/
export class CommentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
