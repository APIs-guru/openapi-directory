import { SpeakeasyBase } from "../../../internal/utils";
import { TextEntry } from "./textentry";
/**
 * A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
**/
export declare class ArticleAndParentComment extends SpeakeasyBase {
    article?: TextEntry;
    parentComment?: TextEntry;
}
