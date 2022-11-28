import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleAndParentComment } from "./articleandparentcomment";
import { TextEntry } from "./textentry";
/**
 * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
**/
export declare class Context extends SpeakeasyBase {
    articleAndParentComment?: ArticleAndParentComment;
    entries?: TextEntry[];
}
