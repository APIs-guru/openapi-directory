import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";
/**
 * The request message for Participants.SuggestFaqAnswers.
**/
export declare class GoogleCloudDialogflowV2SuggestFaqAnswersResponse extends SpeakeasyBase {
    contextSize?: number;
    faqAnswers?: GoogleCloudDialogflowV2FaqAnswer[];
    latestMessage?: string;
}
