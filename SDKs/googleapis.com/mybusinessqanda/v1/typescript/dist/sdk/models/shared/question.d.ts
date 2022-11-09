import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Author } from "./author";
import { Answer } from "./answer";
/**
 * Represents a single question and some of its answers.
**/
export declare class Question extends SpeakeasyBase {
    author?: Author;
    createTime?: string;
    name?: string;
    text?: string;
    topAnswers?: Answer[];
    totalAnswerCount?: number;
    updateTime?: string;
    upvoteCount?: number;
}
