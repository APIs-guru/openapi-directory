import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorrectAnswers } from "./correctanswers";
import { Feedback } from "./feedback";



// Grading
/** 
 * Grading for a single question
**/
export class Grading extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correctAnswers" })
  correctAnswers?: CorrectAnswers;

  @SpeakeasyMetadata({ data: "json, name=generalFeedback" })
  generalFeedback?: Feedback;

  @SpeakeasyMetadata({ data: "json, name=pointValue" })
  pointValue?: number;

  @SpeakeasyMetadata({ data: "json, name=whenRight" })
  whenRight?: Feedback;

  @SpeakeasyMetadata({ data: "json, name=whenWrong" })
  whenWrong?: Feedback;
}
