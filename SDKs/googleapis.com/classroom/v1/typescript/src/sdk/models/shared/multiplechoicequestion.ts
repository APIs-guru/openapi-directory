import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultipleChoiceQuestion
/** 
 * Additional details for multiple-choice questions.
**/
export class MultipleChoiceQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices" })
  choices?: string[];
}
