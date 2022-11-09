import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// CommentList
/** 
 * A list of comments on a file in Google Drive.
**/
export class CommentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Comment })
  items?: Comment[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
