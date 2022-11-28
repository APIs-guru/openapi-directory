import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// ListCommentsResponse
/** 
 * The response message for the ListComments endpoint.
**/
export class ListCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
