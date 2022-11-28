import { SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
export declare class PostList extends SpeakeasyBase {
    etag?: string;
    items?: Post[];
    kind?: string;
    nextPageToken?: string;
    prevPageToken?: string;
}
