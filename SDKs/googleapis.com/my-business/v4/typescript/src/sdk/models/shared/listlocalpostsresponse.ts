import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalPost } from "./localpost";


// ListLocalPostsResponse
/** 
 * Response message for ListLocalPosts
**/
export class ListLocalPostsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=localPosts", elemType: shared.LocalPost })
  localPosts?: LocalPost[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
