import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestionInput } from "./choicequestion";
import { ChoiceQuestion } from "./choicequestion";



// GridInput
/** 
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
export class GridInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: ChoiceQuestionInput;

  @SpeakeasyMetadata({ data: "json, name=shuffleQuestions" })
  shuffleQuestions?: boolean;
}


// Grid
/** 
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
export class Grid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: ChoiceQuestion;

  @SpeakeasyMetadata({ data: "json, name=shuffleQuestions" })
  shuffleQuestions?: boolean;
}
