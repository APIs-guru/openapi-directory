import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
/**
 * The request message for Participants.SuggestFaqAnswers.
**/
export declare class GoogleCloudDialogflowV2SuggestFaqAnswersRequest extends SpeakeasyBase {
    assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
    contextSize?: number;
    latestMessage?: string;
}
