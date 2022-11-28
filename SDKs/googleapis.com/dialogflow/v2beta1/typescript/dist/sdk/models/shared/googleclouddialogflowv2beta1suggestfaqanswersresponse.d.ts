import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";
/**
 * The request message for Participants.SuggestFaqAnswers.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse extends SpeakeasyBase {
    contextSize?: number;
    faqAnswers?: GoogleCloudDialogflowV2beta1FaqAnswer[];
    latestMessage?: string;
}
