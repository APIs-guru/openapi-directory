import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// CommentList
/** 
 * A list of comments on a file in Google Drive.
**/
export class CommentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Comment })
  items?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
