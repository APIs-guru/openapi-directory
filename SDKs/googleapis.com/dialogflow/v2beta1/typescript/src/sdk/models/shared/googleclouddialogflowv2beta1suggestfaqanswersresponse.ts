import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";



// GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse
/** 
 * The request message for Participants.SuggestFaqAnswers.
**/
export class GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=faqAnswers", elemType: GoogleCloudDialogflowV2beta1FaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2beta1FaqAnswer[];

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
