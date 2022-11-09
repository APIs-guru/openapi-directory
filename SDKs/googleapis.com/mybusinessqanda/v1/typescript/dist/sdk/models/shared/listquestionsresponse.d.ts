import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Question } from "./question";
/**
 * Response message for QuestionsAndAnswers.ListQuestions
**/
export declare class ListQuestionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    questions?: Question[];
    totalSize?: number;
}
