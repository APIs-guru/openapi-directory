import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestionInput } from "./choicequestion";
import { ChoiceQuestion } from "./choicequestion";
/**
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
export declare class GridInput extends SpeakeasyBase {
    columns?: ChoiceQuestionInput;
    shuffleQuestions?: boolean;
}
/**
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
export declare class Grid extends SpeakeasyBase {
    columns?: ChoiceQuestion;
    shuffleQuestions?: boolean;
}
