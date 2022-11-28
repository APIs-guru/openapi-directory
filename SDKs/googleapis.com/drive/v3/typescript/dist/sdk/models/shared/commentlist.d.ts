import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * A list of comments on a file.
**/
export declare class CommentList extends SpeakeasyBase {
    comments?: Comment[];
    kind?: string;
    nextPageToken?: string;
}
