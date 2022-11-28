import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalPost } from "./localpost";



// ListLocalPostsResponse
/** 
 * Response message for ListLocalPosts
**/
export class ListLocalPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localPosts", elemType: LocalPost })
  localPosts?: LocalPost[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
