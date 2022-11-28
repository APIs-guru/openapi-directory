import { SpeakeasyBase } from "../../../internal/utils";
import { LocalPost } from "./localpost";
/**
 * Response message for ListLocalPosts
**/
export declare class ListLocalPostsResponse extends SpeakeasyBase {
    localPosts?: LocalPost[];
    nextPageToken?: string;
}
