import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SuggestionFaqAnswer
/** 
 * Represents suggested answer from "frequently asked questions".
**/
export class GoogleCloudDialogflowV2beta1SuggestionFaqAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=question" })
  question?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
