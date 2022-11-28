import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feedback } from "./feedback";



// Grade
/** 
 * Grade information associated with a respondent's answer to a question.
**/
export class Grade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correct" })
  correct?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: Feedback;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
