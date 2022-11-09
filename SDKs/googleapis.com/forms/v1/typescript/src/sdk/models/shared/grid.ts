import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceQuestion } from "./choicequestion";


// Grid
/** 
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
**/
export class Grid extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: ChoiceQuestion;

  @Metadata({ data: "json, name=shuffleQuestions" })
  shuffleQuestions?: boolean;
}
