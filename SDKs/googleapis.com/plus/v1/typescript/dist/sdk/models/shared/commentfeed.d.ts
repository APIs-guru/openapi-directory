import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Comment } from "./comment";
export declare class CommentFeed extends SpeakeasyBase {
    etag?: string;
    id?: string;
    items?: Comment[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    title?: string;
    updated?: Date;
}
