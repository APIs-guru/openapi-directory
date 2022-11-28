import { SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
/**
 * Represents an answer to a question
**/
export declare class Answer extends SpeakeasyBase {
    author?: Author;
    createTime?: string;
    name?: string;
    text?: string;
    updateTime?: string;
    upvoteCount?: number;
}
/**
 * Represents an answer to a question
**/
export declare class AnswerInput extends SpeakeasyBase {
    author?: Author;
    text?: string;
}
