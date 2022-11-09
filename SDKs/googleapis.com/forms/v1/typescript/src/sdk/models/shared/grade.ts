import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Feedback } from "./feedback";


// Grade
/** 
 * Grade information associated with a respondent's answer to a question.
**/
export class Grade extends SpeakeasyBase {
  @Metadata({ data: "json, name=correct" })
  correct?: boolean;

  @Metadata({ data: "json, name=feedback" })
  feedback?: Feedback;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
