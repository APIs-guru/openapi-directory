import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CorrectAnswer
/** 
 * A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
**/
export class CorrectAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
