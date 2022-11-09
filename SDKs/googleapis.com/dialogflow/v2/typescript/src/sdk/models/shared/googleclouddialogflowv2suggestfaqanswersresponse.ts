import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";


// GoogleCloudDialogflowV2SuggestFaqAnswersResponse
/** 
 * The request message for Participants.SuggestFaqAnswers.
**/
export class GoogleCloudDialogflowV2SuggestFaqAnswersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=faqAnswers", elemType: shared.GoogleCloudDialogflowV2FaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2FaqAnswer[];

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
