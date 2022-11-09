import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtraMaterial } from "./extramaterial";


// Feedback
/** 
 * Feedback for a respondent about their response to a question.
**/
export class Feedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=material", elemType: shared.ExtraMaterial })
  material?: ExtraMaterial[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}
