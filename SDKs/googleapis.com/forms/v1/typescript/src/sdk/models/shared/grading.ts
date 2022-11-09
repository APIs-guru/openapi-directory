import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CorrectAnswers } from "./correctanswers";
import { Feedback } from "./feedback";
import { Feedback } from "./feedback";
import { Feedback } from "./feedback";


// Grading
/** 
 * Grading for a single question
**/
export class Grading extends SpeakeasyBase {
  @Metadata({ data: "json, name=correctAnswers" })
  correctAnswers?: CorrectAnswers;

  @Metadata({ data: "json, name=generalFeedback" })
  generalFeedback?: Feedback;

  @Metadata({ data: "json, name=pointValue" })
  pointValue?: number;

  @Metadata({ data: "json, name=whenRight" })
  whenRight?: Feedback;

  @Metadata({ data: "json, name=whenWrong" })
  whenWrong?: Feedback;
}
