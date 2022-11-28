import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * A list of comments on a file in Google Drive.
**/
export declare class CommentList extends SpeakeasyBase {
    items?: Comment[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
}
