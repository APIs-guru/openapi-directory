import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultipleChoiceQuestion
/** 
 * Additional details for multiple-choice questions.
**/
export class MultipleChoiceQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=choices" })
  choices?: string[];
}
