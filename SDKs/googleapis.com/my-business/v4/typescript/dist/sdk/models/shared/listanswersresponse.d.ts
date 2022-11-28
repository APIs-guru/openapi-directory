import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * Response message for QuestionsAndAnswers.ListAnswers
**/
export declare class ListAnswersResponse extends SpeakeasyBase {
    answers?: Answer[];
    nextPageToken?: string;
    totalSize?: number;
}
