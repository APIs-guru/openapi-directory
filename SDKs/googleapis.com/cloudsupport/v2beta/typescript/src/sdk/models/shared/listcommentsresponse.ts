import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// ListCommentsResponse
/** 
 * The response message for the ListComments endpoint.
**/
export class ListCommentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
