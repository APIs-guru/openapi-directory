import { SpeakeasyBase } from "../../../internal/utils";
import { CorrectAnswers } from "./correctanswers";
import { Feedback } from "./feedback";
/**
 * Grading for a single question
**/
export declare class Grading extends SpeakeasyBase {
    correctAnswers?: CorrectAnswers;
    generalFeedback?: Feedback;
    pointValue?: number;
    whenRight?: Feedback;
    whenWrong?: Feedback;
}
