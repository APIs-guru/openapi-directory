import { SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippet } from "./commentsnippet";
/**
 * A *comment* represents a single YouTube comment.
**/
export declare class Comment extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: CommentSnippet;
}
