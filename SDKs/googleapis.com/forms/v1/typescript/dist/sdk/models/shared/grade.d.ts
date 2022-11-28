import { SpeakeasyBase } from "../../../internal/utils";
import { Feedback } from "./feedback";
/**
 * Grade information associated with a respondent's answer to a question.
**/
export declare class Grade extends SpeakeasyBase {
    correct?: boolean;
    feedback?: Feedback;
    score?: number;
}
