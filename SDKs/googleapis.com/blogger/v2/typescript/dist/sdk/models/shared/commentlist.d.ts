import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Comment } from "./comment";
export declare class CommentList extends SpeakeasyBase {
    etag?: string;
    items?: Comment[];
    kind?: string;
    nextPageToken?: string;
    prevPageToken?: string;
}
