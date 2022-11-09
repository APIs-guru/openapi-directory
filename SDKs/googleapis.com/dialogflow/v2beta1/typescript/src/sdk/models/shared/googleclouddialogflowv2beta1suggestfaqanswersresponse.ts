import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";


// GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse
/** 
 * The request message for Participants.SuggestFaqAnswers.
**/
export class GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=faqAnswers", elemType: shared.GoogleCloudDialogflowV2beta1FaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2beta1FaqAnswer[];

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
