import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtraMaterial } from "./extramaterial";



// Feedback
/** 
 * Feedback for a respondent about their response to a question.
**/
export class Feedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=material", elemType: ExtraMaterial })
  material?: ExtraMaterial[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
