import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";



// GoogleCloudDialogflowV2SuggestFaqAnswersResponse
/** 
 * The request message for Participants.SuggestFaqAnswers.
**/
export class GoogleCloudDialogflowV2SuggestFaqAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=faqAnswers", elemType: GoogleCloudDialogflowV2FaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2FaqAnswer[];

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
