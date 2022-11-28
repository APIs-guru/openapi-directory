import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2beta1SuggestArticlesResponse } from "./googleclouddialogflowv2beta1suggestarticlesresponse";
import { GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse } from "./googleclouddialogflowv2beta1suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse } from "./googleclouddialogflowv2beta1suggestsmartrepliesresponse";
/**
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestionResult extends SpeakeasyBase {
    error?: GoogleRpcStatus;
    suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
    suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
    suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
}
