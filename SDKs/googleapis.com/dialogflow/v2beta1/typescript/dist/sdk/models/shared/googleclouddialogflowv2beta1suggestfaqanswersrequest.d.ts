import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AssistQueryParameters } from "./googleclouddialogflowv2beta1assistqueryparameters";
/**
 * The request message for Participants.SuggestFaqAnswers.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest extends SpeakeasyBase {
    assistQueryParams?: GoogleCloudDialogflowV2beta1AssistQueryParameters;
    contextSize?: number;
    latestMessage?: string;
}
